import { ApolloServer, gql } from 'apollo-server-hapi';
import path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import { formatError }  from '../helper';
import resolvers from "../graphql/resolver"

const InitApolloServer = async (app) => {
    try {
        // // Merge all schemas file
        const TypesArray = [
            ...fileLoader(path.join(__dirname, '../graphql/schema.graphql'))
        ];
        const GraphqlSchemas = mergeTypes(TypesArray, { all: true });
        const typeDefs = gql`${GraphqlSchemas}`;


        const serverApollo = new ApolloServer({
            typeDefs,
            resolvers,
            formatError: (error) => {
                console.error('error----------->', error);
                return formatError(error);
            },
        });
        await serverApollo.applyMiddleware({ app });

        serverApollo.installSubscriptionHandlers(app.listener);
    }
    catch (error) {
        console.error('Error on apollo server!', error);
    }
};

export default InitApolloServer;