import { Field, InputType } from "type-graphql";

@InputType() // We use for Arguments
export class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  email: string;
  @Field()
  password: string;
}
