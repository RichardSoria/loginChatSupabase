import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseClient, createClient, User } from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const Messages_DB = 'messages';

export interface Message {
  text: string;
  user_sender: string;
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private _messages: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  private _currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  private _userLoaded = new BehaviorSubject(false);

  private supabase: SupabaseClient;

  constructor(private router: Router) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      }
    });

    this.supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        this._currentUser.next(session?.user ?? null);
        this.loadMessages();
      } else {
        this._currentUser.next(null);
      }
    });

    this.loadUser();
  }

  async loadUser() {
    const { data, error } = await this.supabase.auth.getUser();

    if (data?.user) {
      this._currentUser.next(data.user);
    } else {
      this._currentUser.next(null);
    }

    this._userLoaded.next(true);
  }

  get userLoaded(): Observable<boolean> {
    return this._userLoaded.asObservable();
  }

  get currentUser(): Observable<User | null> {
    return this._currentUser.asObservable();
  }

  signIn(credentials: { email: string, password: string }) {
    return new Promise(async (resolve, reject) => {
      const { error, data } = await this.supabase.auth.signInWithPassword(credentials);

      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  }

  signUp(credentials: { email: string, password: string }) {
    return new Promise(async (resolve, reject) => {
      const { error, data } = await this.supabase.auth.signUp(credentials);

      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  }

  signOut() {
    this.supabase.auth.signOut().then(() => {
      this._currentUser.next(null);
      this.router.navigate(['/auth']);
    });
  }

  get messages(): Observable<Message[]> {
    return this._messages.asObservable();
  }

  async loadMessages() {
    const query = await this.supabase.from(Messages_DB).select('*');
    this._messages.next(query.data || []);
  }

  listenToMessages() {
  const channel = this.supabase
    .channel('messages-insert-channel')
    .on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: Messages_DB },
      (payload) => {
        const newMessage = payload.new as Message;
        const current = this._messages.getValue();

        const exists = current.some(m =>
          m.text === newMessage.text &&
          m.user_sender === newMessage.user_sender
        );

        if (!exists) {
          this._messages.next([...current, newMessage]);
        }
      }
    )
    .subscribe();
}

  async addMessage(text: string, user_sender: string) {
    const newMesage = {
      text: text,
      user_sender: user_sender
    };
    const result = await this.supabase.from(Messages_DB).insert(newMesage);

  }
}
