# 🖥️ API de Gestión de Tareas (Backend .NET)

Este proyecto es un backend en .NET Core para una aplicación de gestión de tareas. Proporciona una API RESTful que permite realizar operaciones CRUD sobre tareas.

---

## 🚀 Características

- 📋 Obtener todas las tareas  
- ➕ Crear una nueva tarea  
- ✅ Marcar tarea como completada  
- ❌ Eliminar tarea  
- 🔎 Filtrar tareas por estado (Pendientes/Completadas)

---

## 🏗️ Tecnologías Utilizadas

- .NET Core 9
- Entity Framework Core (Base de datos en memoria)
- C#
- Swagger (para documentación de la API)
- Docker (para despliegue en Render)

---

## 📦 Instalación y Configuración

### 1️⃣ Clonar el repositorio


### 2️⃣ Restaurar dependencias

```bash
dotnet restore
```

---

## ▶️ Ejecución con Docker

### 1️⃣ Construir la imagen Docker

```bash
docker build -t task-backend .
```

### 2️⃣ Ejecutar el contenedor

```bash
docker run -p 8080:8080 task-backend
```

El backend se ejecutará en [http://localhost:8080](http://localhost:8080)

---

## 📂 Estructura del Proyecto

```
Task-backend/
├── Api/
│   ├── Controllers/   # Controladores API
├── Core/
├── Infrastructure/
├── appsettings.json
├── Program.cs
├── Startup.cs
├── Dockerfile
```

---

## 🌐 API Endpoints

### Tareas (`/api/tasks`)

| Método | Endpoint           | Descripción               |
|--------|--------------------|---------------------------|
| GET    | `/api/tasks`       | Obtener todas las tareas  |
| POST   | `/api/tasks`       | Crear una nueva tarea     |
| PUT    | `/api/tasks/{id}`  | Actualizar una tarea      |
| DELETE | `/api/tasks/{id}`  | Eliminar una tarea        |
