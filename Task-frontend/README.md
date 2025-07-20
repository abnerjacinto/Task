# 📝 Aplicación de Gestión de Tareas (Angular + .NET)

Este proyecto es una aplicación web para la gestión de tareas, desarrollada con Angular en el frontend y .NET en el backend.

---

## 🚀 Características

- 📋 Listado de tareas  
- ➕ Agregar una nueva tarea  
- ✅ Marcar tarea como completada  
- ❌ Eliminar tarea  
- 🔎 Filtrar tareas por estado (Todas, Pendientes, Completadas)

---

## 🏗️ Tecnologías Utilizadas

### Frontend:
- Angular (Versión más reciente)
- PrimeNG (Componentes UI)
- TypeScript
- Bootstrap o TailwindCSS

---

## 📦 Instalación y Configuración

### 1️⃣ Clonar el repositorio


### 2️⃣ Instalación del Frontend

```bash
cd TASK-FRONTEND
npm install # o yarn install
```

### ▶️ Ejecución del Frontend

```bash
cd TASK-FRONTEND
ng serve
```

Por defecto, la aplicación se abrirá en [http://localhost:4200](http://localhost:4200)

---

## 📂 Estructura del Proyecto

```
TASK-FRONTEND/
├── src/
│   ├── app/
│   │   ├── core/            # Lógica de negocio y casos de uso
│   │   ├── infrastructure/  # Servicios y repositorios
│   │   ├── presentation/    # Componentes y pantallas UI
│   ├── assets/
│   ├── environments/
├── angular.json
├── package.json
├── README.md
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

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---
