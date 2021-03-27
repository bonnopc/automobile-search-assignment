// import { ApiEndPoint } from "config"
// import ApolloClient from "apollo-client"
// import { HttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { createUploadLink } from "apollo-upload-client"
// import { setContext } from "apollo-link-context";
// import { ApolloLink } from "apollo-link";

// const headerLink = setContext(async (req, { headers }) => {
//     console.log({ headers })
//     return {
//       headers: {
//         ...headers,
//       }
//     };
//   });

// const cache = new InMemoryCache({
//     addTypename: false
// });

// const httpLink = new createUploadLink({
//     uri: ApiEndPoint().url
// });

// const defaultOptions = {
//     watchQuery: {
//         fetchPolicy: 'cache-and-network',
//         errorPolicy: 'ignore',
//     },
//     query: {
//         fetchPolicy: 'network-only',
//         errorPolicy: 'all',
//     },
//     mutate: {
//         errorPolicy: 'all',
//     },
// }

// const client = new ApolloClient({ 
//     link: ApolloLink.from([headerLink, httpLink]),
//     cache,
//     defaultOptions
// });


// export default client

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { ApiEndPoint } from "config"

const createApolloClient = () => {
    return new ApolloClient({
        link: createUploadLink({
            uri: "http://localhost:8182/graphql",
        }),
        cache: new InMemoryCache(),
    });
};

export default createApolloClient