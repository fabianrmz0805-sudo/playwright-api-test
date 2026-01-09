import { test, expect } from '@playwright/test';
import UsersApi from '../src/api/users.api';
import { UserResponse } from '../src/models/user.interface';

test.describe('Reqres API Automation', () => {
  let usersApi: UsersApi;

  test.beforeEach(async ({ request }) => {
    usersApi = new UsersApi(request);
  });

  // Consultar usuario por ID
  test('Consultar usuario por ID', async () => {
    const response = await usersApi.getUser(2);
    expect(response.status()).toBe(200);

    const body: UserResponse = await response.json();

    expect(body.data.id).toBe(2);
    expect(body.data.email).toContain('@');
    expect(body.data.first_name).toBeTruthy();
    expect(body.data.last_name).toBeTruthy();
    expect(body.data.avatar).toBeTruthy();
  });

  // Actualizar usuario (solo verificamos status y updatedAt)
  test('Actualizar usuario', async () => {
    const payload = { first_name: 'Fabian', last_name: 'Moreno' }; // Solo campos reales

    const response = await usersApi.updateUser(2, payload);
    expect(response.status()).toBe(200,403);

    const body = await response.json();
    // La API de Reqres devuelve updatedAt en updateUser
    expect(body.updatedAt).toBeDefined();
  });

  // Eliminar usuario
  test('Eliminar usuario', async () => {
    const response = await usersApi.deleteUser(2);
    expect([204]).toContain(response.status());
  });

  // Listar usuarios
  test('Listar usuarios', async () => {
    const response = await usersApi.listUsers();
    expect(response.status()).toBe(200,403);

    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);
  });
});
