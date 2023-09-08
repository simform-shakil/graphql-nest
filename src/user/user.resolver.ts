import { UseGuards } from '@nestjs/common';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from './entity/user.entity';

@Resolver()
export class UserResolver {
  @Query(() => String, { name: 'Login' })
  @UseGuards(AuthGuard)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Context('user') user: User,
  ): string {
    return 'login successfully!!' + JSON.stringify(user);
  }
}
