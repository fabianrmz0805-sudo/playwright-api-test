Pruebas Automatizadas – API de Gestión de Usuarios
Descripción del Proyecto

Este proyecto contiene pruebas automatizadas realizadas sobre una API pública de gestión de usuarios, utilizada como System Under Test (SUT):

https://reqres.in/api-docs/

El objetivo del proyecto es validar el correcto funcionamiento de los principales endpoints REST relacionados con la gestión de usuarios, mediante pruebas automatizadas de tipo API.

Tecnologías

• Node.js 18.x o superior
• Framework de automatización para pruebas de API
• TypeScript / JavaScript
• NPM

Requisitos

• Node.js 18 o superior
• NPM
• Acceso a internet para consumir la API pública

Estructura del Proyecto

/automation-api-tests

├── src/
│ ├── api/ # Clases para consumo de endpoints
│ ├── models/ # Interfaces / modelos de datos
│
├── tests/ # Casos de prueba automatizados
├── package.json # Dependencias y scripts del proyecto
├── README.md # Documentación del proyecto

Alcance de las Pruebas

Se implementaron pruebas automatizadas para las siguientes funcionalidades del API:

• Consultar un usuario por ID
• Actualizar los datos de un usuario
• Eliminar un usuario del sistema
• Consultar la lista completa de usuarios

Casos de Prueba Implementados
Consultar usuario por ID

Se realiza una petición GET a un usuario específico, validando:
• Código de respuesta del servicio
• Estructura de la respuesta
• Información básica del usuario retornado

Actualizar datos de un usuario

Se ejecuta una petición PUT enviando nuevos datos del usuario.
Se valida:
• Código de respuesta del servicio
• Presencia del campo de fecha de actualización

Eliminar un usuario

Se ejecuta una petición DELETE sobre un usuario existente.
Se valida que el servicio responda correctamente al proceso de eliminación.

Consultar lista completa de usuarios

Se realiza una petición GET para obtener la lista de usuarios.
Se valida que la respuesta contenga información y estructura esperada.

Hallazgo Técnico

Durante la ejecución de las pruebas automatizadas, el servicio responde con el código HTTP 403 (Forbidden).

Tras un análisis más detallado, se identificó que el API cuenta con un mecanismo de seguridad basado en Cloudflare, el cual solicita validación manual mediante el desafío “No soy un robot” cuando las peticiones provienen de entornos automatizados.

Debido a esta restricción, las pruebas automatizadas no pueden completarse correctamente sin intervención manual, ya que la validación humana solo es posible a través del navegador.

Se adjunta evidencia del comportamiento identificado durante la ejecución de las pruebas.

Instalación del Proyecto
Instalación de Node.js

Descargar Node.js desde el sitio oficial:
https://nodejs.org/

Instalar la versión 18 o superior.

Verificar la instalación ejecutando:

node -v
npm -v

Clonar el repositorio
git clone https://github.com/fabianrmz0805-sudo/playwright-api-test.git


Ingresar al directorio del proyecto:

cd nombre-del-proyecto

Instalación de dependencias

Instalar las dependencias del proyecto ejecutando:

npm install

Ejecución de las Pruebas

Para ejecutar todos los casos de prueba automatizados, utilizar el siguiente comando:

npm test


El resultado de la ejecución se mostrará directamente en la consola, indicando el estado de cada caso de prueba.

Evidencias

Se adjuntan evidencias donde se observa el código de respuesta HTTP 403, generado por la protección de seguridad del servicio, lo cual impide la automatización completa de los endpoints evaluados.

Notas Finales

El ejercicio permitió identificar una restricción de seguridad externa al código de pruebas, la cual impacta directamente la ejecución automatizada del API.

Se deja constancia del análisis realizado, del tiempo invertido en la investigación del comportamiento del servicio y del hallazgo técnico identificado.