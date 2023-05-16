import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  async helloWorld() {
    return "Hello World :)";
  }
}
