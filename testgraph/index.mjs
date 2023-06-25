import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { join } from 'node:path';
import {cwd}  from 'node:process';
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'

const schema = loadSchemaSync(join(cwd(), '../graph/schema.graphql'), { loaders: [new GraphQLFileLoader()] })

const resolvers = {}

const schemaWithResolvers = addResolversToSchema({ schema, resolvers })
const server = new ApolloServer({schema: schemaWithResolvers});

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(function(arg) {
    console.dir(arg);

});