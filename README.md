# Ciudad-Data
API Gateway RESTful desarrollada en TypeScript y Node.js para la centralización y estandarización de datos públicos abiertos (Geo, Transporte, Estadísticas).

# 🏙️ CiudadData - API Gateway de Datos Públicos

**Materia:** Tópicos Especiales de Programación (UCAB)  
**Profesor:** Yisheng León  

## 📋 Descripción
API RESTful desarrollada en **Node.js** y **TypeScript** que centraliza información de fuentes abiertas internacionales (GeoNames, Banco Mundial, OMS). Permite consultar datos geográficos, estadísticas globales y transporte urbano unificado.

## 🛠️ Stack Tecnológico
* **Core:** Node.js + TypeScript
* **Base de Datos:** MongoDB + Mongoose (Reportes ciudadanos y caché)
* **Testing:** Jest + Supertest (Enfoque TDD)
* **Documentación:** Swagger (OpenAPI)

## 🚀 Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/ciudad-data-api.git](https://github.com/tu-usuario/ciudad-data-api.git)
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz basado en `.env.example` e incluye tus API Keys:
    ```env
    PORT=3000
    MONGO_URI=tu_string_de_conexion
    GEONAMES_USER=tu_usuario
    MTA_API_KEY=tu_clave
    ```
4.  **Ejecutar en desarrollo:**
    ```bash
    npm run dev
    ```

## 🧪 Ejecutar Pruebas
El proyecto sigue la metodología TDD. Para correr los tests:
```bash
npm test
