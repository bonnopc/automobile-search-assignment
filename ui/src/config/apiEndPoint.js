const ApiEndPoint = () => ({
    url: process.env.REACT_APP_API_ENDPOINT || "http://localhost:8182/graphql",
})

export default ApiEndPoint