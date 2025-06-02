# 🔐 LoginChatSupabase
Add commentMore actions
Este proyecto fue construido **desde cero** utilizando Ionic + Angular (con Standalone Components) y Supabase para la autenticación y mensajería en tiempo real.

A continuación, se describen todos los pasos, componentes y funcionalidades implementadas.

---

## 🧱 Creación del Proyecto

El proyecto fue creado desde cero con el siguiente comando:

```bash
ionic start LoginChatSupabase blank --type=angular
```

Se eligió una plantilla en blanco para trabajar con mayor control.

---

## 📦 Instalaciones Necesarias

Instalación del cliente de Supabase:

```bash
npm install @supabase/supabase-js
```

---

## 🗂️ Estructura General

El proyecto cuenta con las siguientes páginas y servicios:

---

### 📄 Auth Page (Autenticación)

- Registro de usuario
- Inicio de sesión
- Cierre de sesión
- Validación de formulario:
  - Email requerido y con formato válido
  - Contraseña requerida
- Uso de:
  - Spinners de carga
  - Alertas (`showDataAlert`)
  - Diseño simple y funcional

📸 **Captura del login y/o formulario de registro**

![image](https://github.com/user-attachments/assets/f77ae4eb-32d3-49eb-91db-5c5da67b62b2)

![image](https://github.com/user-attachments/assets/d3621278-c8b8-4c67-a933-1c2efae599de)

![image](https://github.com/user-attachments/assets/5289e080-521b-4d93-9ea0-86f0032ce88f)

![image](https://github.com/user-attachments/assets/8ec8f46d-a3a3-4436-b333-3a4aaa77b1b3)

![image](https://github.com/user-attachments/assets/03f9bb93-1544-4a42-9b36-017a2770dfb9)

![image](https://github.com/user-attachments/assets/d12d6b1e-d24e-425e-b204-449e84e35ae6)

![image](https://github.com/user-attachments/assets/e7b6b0cd-3c16-494f-b8de-2d788ea3a8f1)

![image](https://github.com/user-attachments/assets/531305f5-a2e7-4155-bab6-f3796d72d0dd)

---

### 💬 Chat Page (Mensajería en Tiempo Real)

- Visualización de mensajes en tiempo real
- Campo de texto para nuevos mensajes
- Usuario conectado visible
- Animaciones de entrada de mensajes

📸 **Captura de la pantalla del chat**

![image](https://github.com/user-attachments/assets/2cd9fd41-fa35-4dac-9d6b-9ca1af57e3bb)

![image](https://github.com/user-attachments/assets/63bc0357-5c3a-4a35-96fb-362c24d2c7c3)

![image](https://github.com/user-attachments/assets/7479e811-be5b-4995-95e7-eaeec52fe9f4)

![image](https://github.com/user-attachments/assets/50962721-bae8-4b52-ad1d-d2a98b455653)

![image](https://github.com/user-attachments/assets/7031ef58-ec97-498d-b64a-c433f9390704)

---

### 🧠 SupabaseService (Servicio Central)

Contiene toda la lógica de interacción con Supabase:

- `signUp()`: Registro
- `signIn()`: Inicio de sesión
- `signOut()`: Cierre de sesión
- `getUser()`: Obtener usuario actual
- `sendMessage()`: Enviar mensaje
- `getMessagesRealtime()`: Recibir mensajes en tiempo real

📸 **Captura del servicio Supabase**

![image](https://github.com/user-attachments/assets/24c9d113-4a7c-4368-9f81-714f0e4249c8)

![image](https://github.com/user-attachments/assets/226a9ed6-335a-477e-b124-f5e7ab65da3f)

![image](https://github.com/user-attachments/assets/80ca72ce-04ec-419c-a436-afa2d2bed729)

![image](https://github.com/user-attachments/assets/6ef926a3-1884-4932-a6e1-c20095b99fc1)

---

### 🔒 Auth Guard

Protección de la ruta `/chat` usando `authGuard`:

![image](https://github.com/user-attachments/assets/7f9c5f17-0d00-4910-888e-176175cbe617)

![image](https://github.com/user-attachments/assets/5898c662-1f64-450f-98cc-85fc2434f48e)

---

## 🧭 Rutas

Configuración principal de rutas (`app.routes.ts`):

- `/auth`: Página de autenticación
- `/chat`: Página protegida (chat)

![image](https://github.com/user-attachments/assets/28934d5f-ac6c-48ae-ad62-7d0d8fee5ffb)

---

## ⚙️ Variables de Entorno

Las variables necesarias se encuentran en:

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  supabaseUrl: '',
  supabaseKey: ''
};
```

🛡️ **¡Importante!**
- Este archivo está ignorado en `.gitignore`
- Se proporciona un ejemplo editable en:

```
src/environments/environment.example.ts
```

---

## ✅ Funcionalidades Implementadas

- [x] Registro de usuarios
- [x] Inicio de sesión y cierre
- [x] Validación de formularios
- [x] Protección de rutas
- [x] Obtención del usuario actual
- [x] Envío y recepción de mensajes en tiempo real
- [x] Visualización de usuario conectado

---

## 📝 Notas Finales

- El proyecto está desarrollado completamente con **Angular Standalone Components**
- Supabase gestiona automáticamente la sesión y autenticación
- Supabase por defecto activa RSL es decir las políticas para manipular la tabla, en caso de dejar vácio este apartado, no se podrá interactuar con la misma
- Desactivar RSL para poder acceder a las operaciones de la tabla
- Activar RealTime para cada vez que se haga alguna manipulación se vea actualizado los cambios, dado al comportamiento de supabase
- El sistema está preparado como base para futuras funcionalidades más avanzadas (como chats privados, carga de archivos, etc.)

---

## 👨‍💻 Autor

> Richard Soria - Desarollo de Aplicaciones Móviles
