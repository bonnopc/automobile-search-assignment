export default (error) => {
    switch (error.extensions.code) {
        case 'INTERNAL_SERVER_ERROR':
            return {
                message: error.message,
                statusCode: 500
            };
        case 'NOT_ACCEPTABLE':
            return {
                message: error.message,
                statusCode: 406
            };
        default:
            return error;
    }
};
