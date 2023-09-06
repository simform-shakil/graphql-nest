import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateBooksArgs {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  price: number;

  @Field()
  title: string;
}
