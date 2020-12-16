import 'reflect-metadata'
import './utils/connection'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import CategoryResolver from './graphql/category/CategoryResolver'
import VideoResovler from './graphql/video/VideoResovler'

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [CategoryResolver, VideoResovler],
  })

  const server = new ApolloServer({ schema })

  server.listen({ port: 4100 }, () => console.log('Running'))
}

bootstrap()
