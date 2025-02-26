# PetGuardian - Red de Apadrinamiento de Mascotas sin Hogar

## Descripción
PetGuardian es una plataforma full-stack que conecta refugios y rescatistas con personas interesadas en apadrinar mascotas sin hogar. Los usuarios pueden brindar apoyo financiero, emocional o logístico hasta que las mascotas encuentren un hogar definitivo.

## Tecnologías Utilizadas

### Frontend
- **Next.js**: Desarrollo optimizado con Server-Side Rendering (SSR) y Static Site Generation (SSG) para mejorar la carga de contenido.
- **Tailwind CSS**: Estilizado rápido y moderno para una mejor experiencia de usuario.

### Backend
- **Spring Boot**: API REST para manejar usuarios, mascotas y donaciones.
- **Spring Security + JWT**: Autenticación segura.
- **PostgreSQL/MySQL**: Base de datos para almacenar información relevante.

### Extras
- **Stripe o PayPal**: Procesamiento de donaciones.
- **Cloudinary/Firebase Storage**: Almacenamiento de imágenes.
- **Notificaciones por email/SMS**: Para actualizaciones sobre mascotas y padrinos.

## Estado Actual del Proyecto
- [X] Configuración inicial de Next.js y Spring Boot.
- [X] Creación de la estructura de la base de datos.
- [X] Implementación del sistema de autenticación con JWT.
- [X] Desarrollo de los primeros endpoints para gestión de usuarios y mascotas.
- [X] Implementación del sistema de donaciones.
- [X] Integración de almacenamiento de imágenes.
- [X] Notificaciones por email/SMS.

## Instalación y Uso

### Backend
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/petguardian.git
   ```
2. Ir al directorio del backend:
   ```sh
   cd backend
   ```
3. Configurar el archivo `application.properties` con la información de la base de datos y JWT.
4. Ejecutar el proyecto:
   ```sh
   mvn spring-boot:run
   ```

### Frontend
1. Ir al directorio del frontend:
   ```sh
   cd frontend
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Ejecutar el proyecto:
   ```sh
   npm run dev
   ```

## Contribución
Si deseas contribuir al proyecto, abre un issue o un pull request con tus cambios.

## Licencia
Este proyecto está bajo la licencia MIT.

---
**Contacto**: Puedes comunicarte con el equipo de desarrollo a través de [correo o redes sociales].

