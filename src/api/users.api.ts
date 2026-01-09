import { APIRequestContext } from '@playwright/test';

export default class UsersApi {
  private request: APIRequestContext;
  private readonly apiUrl= 'https://reqres.in/api/users'

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getUser(id: number) {
    return this.request.get(`${this.apiUrl}/${id}`);
  }

  async updateUser(id: number, body: any) {
    return this.request.put(`${this.apiUrl}/${id}`, { data: body });
  }

  async deleteUser(id: number) {
    return this.request.delete (`${this.apiUrl}/${id}`);
  }

  async listUsers() {
    return this.request.get('https://reqres.in/api/users?page=1');
  }
}
