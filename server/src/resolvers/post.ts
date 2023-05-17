import { Arg, Mutation, Resolver } from "type-graphql";
import { Post } from "../entities/Post";

@Resolver()
export class PostResolver {
  @Mutation(() => Post)
  //("title") Actual name of Graphql Schema
  // title: string Actual variable for function
  async createPost(@Arg("title") title: string): Promise<Post> {
    return Post.create({ title }).save();
  }
}
