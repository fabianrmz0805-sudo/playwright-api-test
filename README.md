# Reto Técnico Sofka - Automatización de Pruebas con Playwright

## Descripción
Proyecto de pruebas automatizadas de la API Reqres usando Playwright en TypeScript.  
Incluye pruebas de:

- Consultar usuario por ID
- Actualizar usuario
- Eliminar usuario
- Listar usuarios

Los casos de prueba están documentados en **Gherkin** (`features/users.feature`) y los reportes se generan automáticamente en **HTML**.  

El proyecto sigue buenas prácticas de programación y un **patrón de diseño POM** (Page Object Model).

---

## Requisitos

- Node.js >= 20.0.0  
- npm >= 9.0.0  
- Playwright >= 1.40.0  

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/<TU_USUARIO>/playwright-api-test.git
cd playwright-api-test
