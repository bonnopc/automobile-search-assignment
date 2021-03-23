import { GraphQLScalarType } from 'graphql';
import { ObjectId as BsonObjectId } from 'bson';

const objectidPattern = /^[0-9a-fA-F]{24}$/;
const isObjectId = (str) => objectidPattern.test(str);

const parseObjectId = (_id) => {
    if (isObjectId(_id)) {
        return new BsonObjectId(_id);
    }

    throw new Error('ObjectId must be a mongodb objectId type');
};

const ObjectId = new GraphQLScalarType({
    name: 'ObjectId',
    description: 'ObjectId is a custom scalar type that represents a MongoDB Object id which is a 12 byte binary value which is often represented as a 24 character hex string, and one of the standard field types supported by the MongoDB BSON specification.',
    serialize: String,
    parseValue: parseObjectId,
    parseLiteral (ast) {
        return parseObjectId(ast.value);
    }
});

export default {
    BaseResponse: {
        __resolveType () {
            return null;
        }
    },
    ObjectId
};