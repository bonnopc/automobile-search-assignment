import gql from "graphql-tag"

export default gql`
    query cars {
        cars{
            statusCode
            message
            result{
                uid
                name
                price
            }
        }
    }
`