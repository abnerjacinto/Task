# 📝 Task Manager - Aplicación de Gestión de Tareas (Angular + .NET)

Este proyecto es una solución completa para la gestión de tareas, compuesta por un **frontend** desarrollado en **Angular** y un **backend** construido en **.NET Core**. Permite realizar operaciones CRUD sobre tareas de forma eficiente y moderna.

---

## 📁 Estructura del Repositorio

```
/
├── Task-backend/         # Proyecto Backend (.NET)
│   ├── Task-backend/     # Código fuente de la API
│   ├── README-backend.md # Documentación específica del backend
│   └── Task-backend.sln  # Solución .NET
│
├── Task-frontend/        # Proyecto Frontend (Angular)
│   └── ...               # Código fuente del frontend
│
├── README.md             # Este archivo (documentación general)
```

---

## 🧩 Componentes del Proyecto

### 🔹 Frontend (Angular)

- Angular (última versión)
- PrimeNG (Componentes UI)
- Bootstrap o TailwindCSS
- TypeScript

### 🔹 Backend (.NET)

- .NET 8
- Entity Framework Core (InMemory)
- C#
- Swagger
- Docker

---

## 🚀 Funcionalidades

- 📋 Listado de tareas
- ➕ Crear una nueva tarea
- ✅ Marcar tareas como completadas
- ❌ Eliminar tareas
- 🔎 Filtros por estado (Pendientes, Completadas)

---

## ⚙️ Instalación

### 🔧 Requisitos

- Node.js y Angular CLI
- .NET SDK 9
- Docker (opcional)

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/crvini/task-manager.git
cd task-manager
```

---

## ▶️ Ejecución

### 🖥️ Backend

```bash
cd Task-backend
dotnet restore
dotnet run
```

O usando Docker:

```bash
docker build -t task-backend ./Task-backend
docker run -p 8080:8080 task-backend
```

API disponible en: [http://localhost:8080](http://localhost:8080)

---

### 🌐 Frontend

```bash
cd Task-frontend
npm install
ng serve
```

App disponible en: [http://localhost:4200](http://localhost:4200)

---

## 📄 Documentación Adicional

- [README-backend.md](./Task-backend/README-backend.md): Documentación específica del backend.
- [README.md](./Task-frontend/README.md): Documentación específica del frontend.

---

## 🌍 Despliegue

El backend puede desplegarse fácilmente en cualquier proveedor con soporte para contenedores Docker.

---

## 🧪 API Endpoints (Resumen)

| Método | Endpoint           | Descripción               |
|--------|--------------------|---------------------------|
| GET    | `/api/tasks`       | Obtener todas las tareas  |
| POST   | `/api/tasks`       | Crear una nueva tarea     |
| PUT    | `/api/tasks/{id}`  | Actualizar una tarea      |
| DELETE | `/api/tasks/{id}`  | Eliminar una tarea        |

---

## 📃 Licencia

Este proyecto está bajo la licencia MIT.

---

## 🙌 Contribuciones

¡Contribuciones, issues y sugerencias son bienvenidas!
