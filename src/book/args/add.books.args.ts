import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddBookArgs {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  price: number;

  @Field()
  title: string;
}
