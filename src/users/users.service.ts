import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type AuthUser = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'aogwhw@42FsdaDF',
    },
  ];

  async findOne(username: string): Promise<AuthUser | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
