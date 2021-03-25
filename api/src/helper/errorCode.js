export default (errorEnum = 'INPUT ERROR', sc = 400) => {
    let statusCode;
    
    switch (errorEnum) {
        case 'DATA_NOT_FOUND':
            statusCode = 404;
            break;
        case 'GAME_ALREADY_FINISHED':
            statusCode = 423;
            break;
        case 'NOT_ACCEPTABLE':
            statusCode = 406;
            break;
        case 'UNAUTHORIZED': 
            statusCode = 403;
            break;
        case 'UNAUTHENTICATED':
            statusCode = 401;
            break;
        case 'INTERNAL_SERVER_ERROR':
            statusCode = 500;
            break;
        default:
            statusCode = sc;
            break;
    }

    return {
        message: errorEnum,
        statusCode,
        result: []
    };
};
