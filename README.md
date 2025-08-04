*  Prueba SC
Este es un proyecto simple para crear, listar y eliminar sucursales usando Node.js, React y MySQL. Está dividido en dos partes: backend y frontend.
 Estructura del proyecto
APPSC/
 ├── backend/
 └── frontend/

* Tecnologías utilizadas
Backend: Node.js, Express, Sequelize
Frontend: React con Hooks
Base de datos: MySQL

* Cómo ejecutar el proyecto
 1. Clonar el repositorio
git clone https://github.com/cjacobo-dot/APPSC.git
 cd APPSC

3. Configurar la base de datos
Crear una base de datos llamada: sucursales_db
 Luego verificar el archivo /backend/config/database.js contiene:
const sequelize = new Sequelize('sucursales_db', 'root', '', {
 host: 'localhost',
 dialect: 'mysql',
 });

4. Instalar dependencias
Backend:
 cd backend
 npm install
 npm start
Deberías ver:
 Conexión a MySQL exitosa.
 Servidor escuchando en http://localhost:3000
Frontend (en otra terminal):
 cd ../frontend
 npm install
 npm start
Abrirá en: http://localhost:5173

* Funcionalidades
Crear una nueva sucursal
Ver lista de sucursales
Eliminar una sucursal

Salu2.



