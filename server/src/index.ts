import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { HelloResolver } from "./resolvers/hello";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { Post } from "./entities/Post";
import { PostResolver } from "./resolvers/post";
import { User } from "./entities/User";
import { UserResolver } from "./resolvers/user";

const main = async () => {
  //connect to database
  const conn = await createConnection({
    type: "postgres",
    database: "lireddittypeorm",
    username: "postgres",
    password: "postgres",
    logging: true,
    synchronize: true,
    entities: [Post, User],
  });
  console.log(conn);
  //create graphql schema
  const schema = await buildSchema({
    resolvers: [HelloResolver, PostResolver, UserResolver],
  });
  //Create apollo server instance
  const apolloServer = new ApolloServer({ schema });
  const app = Express();
  await apolloServer.start();

  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log("server started on http://localhost:4000/graphql");
  });
};
main();
