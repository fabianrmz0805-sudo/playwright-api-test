import { APIRequestContext } from '@playwright/test';

export default class UsersApi {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getUser(id: number) {
    return this.request.get(`https://reqres.in/api/users/${id}`);
  }

  async updateUser(id: number, body: any) {
    return this.request.put(`https://reqres.in/api/users/${id}`, { data: body });
  }

  async deleteUser(id: number) {
    return this.request.delete(`https://reqres.in/api/users/${id}`);
  }

  async listUsers() {
    return this.request.get('https://reqres.in/api/users?page=1');
  }
}
