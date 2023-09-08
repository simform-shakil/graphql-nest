import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
  ) {}

  async findUserByEmail(email: string) {
    const user = await this.userRepo.findOne({ where: { email } });
    return user;
  }
}
