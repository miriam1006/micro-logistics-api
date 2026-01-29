# 🚛 Micro Logistics System

Sistema integral de gestión logística Full Stack. Permite la asignación, seguimiento y actualización de estados de envíos en tiempo real, conectando una API robusta en la nube con una aplicación móvil para conductores.

![Status](https://img.shields.io/badge/Status-Live-success)
![Stack](https://img.shields.io/badge/Stack-FullStack-blue)

## 🚀 Arquitectura del Proyecto

El sistema está construido con una arquitectura monolítica modular, desplegada en la nube para acceso global.

* **Backend:** NestJS (Node.js framework) + TypeScript.
* **Base de Datos:** PostgreSQL (vía Supabase) con ORM TypeORM.
* **Frontend:** Ionic Framework + React (App Híbrida).
* **Infraestructura:** Render (Backend Host) + GitHub (Control de versiones).

## 🛠️ Tecnologías Clave

### Backend (API REST)
* **NestJS:** Para una estructura escalable y modular.
* **TypeORM:** Manejo de relaciones SQL (OneToMany, ManyToOne) y migraciones.
* **Swagger:** Documentación automática de endpoints (`/api`).
* **Class-Validator:** Validación estricta de datos de entrada (DTOs).
* **Automated Triggers:** Lógica de negocio para actualizar estados de envíos basados en bitácoras (Logs).

### Frontend (Mobile App)
* **Ionic React:** Interfaz nativa y reactiva.
* **Axios:** Consumo de API REST.
* **Hooks:** Gestión de estado (`useState`, `useEffect`) para actualizaciones en tiempo real.
* **Cloud Connection:** Configurada para consumir datos del despliegue en Render, permitiendo funcionamiento independiente del entorno local.

## 📦 Funcionalidades (MVP)

1.  **Gestión de Entidades:** CRUD completo para Conductores, Vehículos y Clientes.
2.  **Asignación Inteligente:** Vinculación de vehículos a conductores y envíos a clientes.
3.  **Tracking en Tiempo Real:**
    * El conductor visualiza sus envíos asignados.
    * Visualización de rutas (Origen -> Destino).
4.  **Bitácora de Eventos (Logs):**
    * Registro de cambios de estado (`PENDING` -> `IN_TRANSIT` -> `DELIVERED`).
    * Actualización en cascada automática del estado del envío padre.

## 🌐 Enlaces

* **API Documentation (Swagger):** [https://micro-logistics-api.onrender.com/api](https://micro-logistics-api.onrender.com/api)
* **Repositorio Backend:** [Link a tu repo de la API]
* **Repositorio App:** [Link a tu repo de la App]

---
*Desarrollado como parte de un portafolio profesional de desarrollo Full Stack.*
