# 📁 LoginFilesSupabase

Este proyecto fue construido **desde cero** utilizando Ionic + Angular (con Standalone Components) y Supabase para la autenticación y gestión de archivos con visualización en tiempo real.

A continuación, se describen todos los pasos, componentes y funcionalidades implementadas.

---

## 🧱 Creación del Proyecto

El proyecto fue creado con el siguiente comando:

```bash
ionic start LoginFilesSupabase blank --type=angular
```

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

### 🔐 Auth Page (Autenticación)

- Registro de usuario
- Inicio y cierre de sesión
- Validación de formularios:
  - Email requerido y con formato válido
  - Contraseña requerida
- Uso de:
  - Spinners de carga
  - Alertas (`showDataAlert`)
  - Diseño limpio y funcional

📸 **Capturas de autenticación**

![image](https://github.com/user-attachments/assets/f77ae4eb-32d3-49eb-91db-5c5da67b62b2)

![image](https://github.com/user-attachments/assets/d3621278-c8b8-4c67-a933-1c2efae599de)

![image](https://github.com/user-attachments/assets/5289e080-521b-4d93-9ea0-86f0032ce88f)

![image](https://github.com/user-attachments/assets/8ec8f46d-a3a3-4436-b333-3a4aaa77b1b3)

![image](https://github.com/user-attachments/assets/03f9bb93-1544-4a42-9b36-017a2770dfb9)

![image](https://github.com/user-attachments/assets/d12d6b1e-d24e-425e-b204-449e84e35ae6)

![image](https://github.com/user-attachments/assets/e7b6b0cd-3c16-494f-b8de-2d788ea3a8f1)

![image](https://github.com/user-attachments/assets/531305f5-a2e7-4155-bab6-f3796d72d0dd)

---

### 📁 Files Page (Gestión de Archivos)

- Visualización en lista de archivos subidos
- Miniatura e información del archivo (nombre y título)
- Carga de archivos desde un modal
- Eliminación de archivos
- Botón flotante para subir nuevos archivos
- Comportamiento visual tipo "galería ligera"

📸 **Capturas de la interfaz de archivos**

![image](https://github.com/user-attachments/assets/118eef9a-c185-4ae5-a2d4-e99e09903852)

![image](https://github.com/user-attachments/assets/f87d7b34-da46-4685-b5e5-09a21885230f)

![image](https://github.com/user-attachments/assets/30635382-ed5e-47fd-be9d-0ff478696ddc)

![image](https://github.com/user-attachments/assets/a9788361-7ab7-4e70-81c9-f25d16ad4b6b)

![image](https://github.com/user-attachments/assets/81b2d733-547b-430b-8d19-fd800d119f54)

![image](https://github.com/user-attachments/assets/b3c375f5-fcfe-4c9d-99ff-532a6e4ae405)

![image](https://github.com/user-attachments/assets/a151c215-fdd8-4047-a511-a3d22213dad8)

![image](https://github.com/user-attachments/assets/00d4e446-30f9-4dc7-8139-85c36014f333)

![image](https://github.com/user-attachments/assets/7ea9cfcc-4928-4d3f-b305-ba955d482519)

![image](https://github.com/user-attachments/assets/af02c929-215f-4030-9907-4f5b7366fc90)

![image](https://github.com/user-attachments/assets/a8a50db7-8b01-4050-8489-fadd2b48e8fd)

![image](https://github.com/user-attachments/assets/4f33530b-7e99-4923-9a2f-a5d7d91deb48)

![image](https://github.com/user-attachments/assets/582a382f-387f-42ef-9270-d1addaddbe25)


### 🧠 SupabaseService (Servicio Central)

Contiene la lógica de interacción con Supabase:

- `signUp()`, `signIn()`, `signOut()`, `getUser()`: Autenticación
- `uploadFile()`: Subir archivos
- `getFiles()`: Listar archivos
- `deleteFile()`: Eliminar archivos
- `listenToFileChanges()`: Escucha en tiempo real (si aplica)

📸 **Capturas del servicio**

![image](https://github.com/user-attachments/assets/33da0623-142c-4966-a0e8-022db19e0250)

![image](https://github.com/user-attachments/assets/d188b9d6-ba70-44f3-b607-1622a0fb2632)

![image](https://github.com/user-attachments/assets/3ac7f298-0a8a-465b-9c21-cedf2e13e092)

![image](https://github.com/user-attachments/assets/7916c0bb-dde6-4150-86a3-20089c375eda)

![image](https://github.com/user-attachments/assets/4256fe2d-0174-4e0f-b129-e8e78b20c142)

![image](https://github.com/user-attachments/assets/69301c23-66df-4989-8c81-05339459848d)

![image](https://github.com/user-attachments/assets/66a061b6-8c8c-4f6e-9a77-54a1fb1508bd)

![image](https://github.com/user-attachments/assets/b3b9617b-d0ea-4d20-8d6e-0169a9bba61e)

![image](https://github.com/user-attachments/assets/176170b9-b5ec-432e-8878-6bd1a031bb9f)

![image](https://github.com/user-attachments/assets/8e9e785d-dbd6-4590-b991-93dcdf5481f6)


---

### 🔒 Auth Guard

Protección de la ruta `/files` para evitar accesos sin autenticación.

📸 **Captura del guard**

![image](https://github.com/user-attachments/assets/7f9c5f17-0d00-4910-888e-176175cbe617)

---

## 🧭 Rutas

Configuración de rutas (`app.routes.ts`):

- `/auth`: Página de autenticación
- `/files`: Página protegida para gestión de archivos
- `/file-modal`: Página protegida para subir el archivo

![image](https://github.com/user-attachments/assets/ce3f13d8-947b-4b89-a0dd-a0ca2cc6ca86)

---

## ⚙️ Variables de Entorno

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  supabaseUrl: '',
  supabaseKey: ''
};
```

✅ Este archivo está ignorado en `.gitignore`, y se proporciona una plantilla:

```
src/environments/environment.example.ts
```

---

## ✅ Funcionalidades Implementadas

- [x] Registro e inicio de sesión
- [x] Cierre de sesión
- [x] Validación de formularios
- [x] Protección de rutas
- [x] Visualización y carga de archivos
- [x] Eliminación de archivos
- [x] Integración visual tipo galería
- [x] Preparado para escucha en tiempo real

---

## 📝 Notas Finales

- Desarrollado con **Angular Standalone Components**
- Supabase maneja autenticación y almacenamiento de forma segura
- Puede expandirse fácilmente para soporte de carpetas, metadatos, filtros o categorías
- Ideal como base para apps de portafolio, gestión documental, tareas con archivos, etc.

---

## 👨‍💻 Autor

> Richard Soria - Desarrollo de Aplicaciones Móviles
