import { Field, InputType } from "type-graphql";

@InputType() // We use for Arguments
export class UsernamePasswordInput {
  @Field()
  email: string;
  @Field()
  username: string;
  @Field()
  password: string;
}
