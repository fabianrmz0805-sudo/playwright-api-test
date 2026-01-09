Pruebas Automatizadas – API de Gestión de Usuarios

Descripción del Proyecto

Este proyecto contiene pruebas automatizadas realizadas sobre una API pública de gestión de usuarios, utilizada como System Under Test (SUT):

https://reqres.in/api-docs/

El objetivo del ejercicio es validar el correcto funcionamiento de los principales endpoints del servicio REST asociados a la gestión de usuarios.

Alcance de las Pruebas

Se implementaron pruebas automatizadas para las siguientes funcionalidades:

Consultar un usuario por ID

Actualizar los datos de un usuario y validar la actualización

Eliminar un usuario del sistema

Consultar la lista completa de usuarios

Casos de Prueba Implementados

Consultar usuario por ID
Se realiza una petición GET a un usuario específico.
Se valida el código de respuesta del servicio.
Se valida la estructura y el contenido de la información retornada.

Actualizar datos de un usuario
Se envía una petición PUT con nuevos datos del usuario.
Se valida el código de respuesta.
Se verifica que la respuesta incluya el campo de fecha de actualización (updatedAt).

Eliminar un usuario
Se ejecuta una petición DELETE sobre un usuario específico.
Se valida que el servicio responda correctamente al proceso de eliminación.

Consultar lista completa de usuarios
Se ejecuta una petición GET para obtener la lista de usuarios.
Se valida que la respuesta contenga información y que la lista no esté vacía.

Hallazgo Técnico

Durante la ejecución de las pruebas automatizadas, el servicio responde con código HTTP 403 (Forbidden).

Luego de un análisis más detallado, se identificó que la API cuenta con un mecanismo de seguridad tipo Cloudflare, el cual requiere validación manual mediante el desafío “No soy un robot” cuando se accede desde ciertos entornos automatizados.

Debido a esta restricción, las pruebas automatizadas no pueden completarse correctamente sin intervención manual, ya que dicha validación solo es posible desde el navegador web.

Se adjunta evidencia del comportamiento identificado.

Requisitos Previos

Instalación de Node.js

Descargar Node.js desde el sitio oficial:
https://nodejs.org/

Instalar la versión 18 o superior.

Verificar la instalación ejecutando en la terminal:

node -v
npm -v

Instalación del Proyecto

Clonar el repositorio:

git clone https://github.com/fabianrmz0805-sudo/playwright-api-test.git

Ingresar al directorio del proyecto:

cd nombre-del-proyecto

Instalar las dependencias del proyecto:

npm install

Instalar la herramienta de automatización utilizada:

npm install @playwright/test

Instalar los componentes necesarios para la ejecución:

npx playwright install

Ejecución de las Pruebas

Para ejecutar todos los casos de prueba, utilizar el siguiente comando:

npx playwright test

El resultado de la ejecución se mostrará directamente en la consola, indicando el estado de cada caso de prueba.

Evidencias

Se adjuntan evidencias donde se observa el código de respuesta 403, generado por la protección de seguridad del servicio, lo cual impide la automatización completa de los endpoints evaluados.

Notas Finales

El ejercicio permitió identificar una restricción de seguridad externa al código de pruebas, la cual impacta directamente la ejecución automatizada del API.

Se deja constancia del análisis realizado y del tiempo invertido en la investigación del comportamiento del servicio.

Si quieres, en el siguiente mensaje puedo:

Ajustarlo para que no mencione Playwright en absoluto

Adaptarlo a un README ultra corto

Alinear exactamente el texto con lo que dijiste en el correo de sustentación