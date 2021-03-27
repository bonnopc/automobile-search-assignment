// import gql from "graphql-tag"
import { gql } from '@apollo/client';

export default gql`
mutation createCar($image: Upload!) {
    createCar(image: $image){
        statusCode
        message
        result{
            uid
            name
            description
            image{
                filename
                mimetype
                encoding
            }
            price
        }
    }
}
`