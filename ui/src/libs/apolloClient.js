import { ApiEndPoint } from "config"
import ApolloClient from "apollo-client"
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const cache = new InMemoryCache({
    addTypename: false
});

const httpLink = new HttpLink({
    uri: ApiEndPoint().url,
});

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
    },
    mutate: {
        errorPolicy: 'all',
    },
}

const client = new ApolloClient({ 
    link: httpLink,
    cache,
    defaultOptions
});


export default client