import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupabaseService, Message } from 'src/app/services/supabase.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ChatPage implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';
  user_sender: string = '';

  constructor(private supabaseService: SupabaseService, private router: Router) {
    this.supabaseService.currentUser.subscribe(user => {
      this.user_sender = user?.email || '';
    });
  }

  ngOnInit() {
    this.supabaseService.loadMessages().then(() => {
      this.supabaseService.messages.subscribe(messages => {
        this.messages = messages;
      });
    })
    this.supabaseService.listenToMessages();
  }

  sendeNewMessage() {
    if (this.newMessage.trim() !== '') {
      this.supabaseService.addMessage(this.newMessage, this.user_sender).then(() => {
        this.newMessage = '';
      }
      )
    }
  }

  logOut() {
    this.supabaseService.signOut();
  }
}
