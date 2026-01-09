Feature: Gestión de usuarios - Reqres API

  Scenario: Consultar usuario por ID
    Given el usuario realiza una petición GET al endpoint "/users/2"
    When la API responde
    Then el status de la respuesta debe ser 200
    And el id del usuario debe ser 2
    And el email debe contener "@"
    And el nombre y apellido deben estar presentes
    And el avatar debe estar presente

  Scenario: Actualizar usuario
    Given el usuario realiza una petición PUT al endpoint "/users/2"
    And envía el payload { first_name: "Fabian", last_name: "Moreno" }
    When la API responde
    Then el status de la respuesta debe ser 200
    And la respuesta debe contener "updatedAt"

  Scenario: Eliminar usuario
    Given el usuario realiza una petición DELETE al endpoint "/users/2"
    When la API responde
    Then el status de la respuesta debe ser 204

  Scenario: Listar usuarios
    Given el usuario realiza una petición GET al endpoint "/users"
    When la API responde
    Then el status de la respuesta debe ser 200
    And la lista de usuarios debe contener al menos un elemento
