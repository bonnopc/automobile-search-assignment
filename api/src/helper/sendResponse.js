import { isNullOrEmptyArray } from './utils';
import ErrorCode  from './errorCode';

export default (result, message = 'SUCCESS', responseEmptyArray = false) => {

    try {
        const response = { message, statusCode: 200 };
        if (result === true) {
            return response;
        }
        else if (responseEmptyArray) {
            return {
                ...response,
                result
            };
        }
        else if (isNullOrEmptyArray(result)) {
            return ErrorCode();
        }
        else if (!isNullOrEmptyArray(result)) {
            return { ...response, result };
        }
        
        return response;
    }
    catch (err) {

        console.error('FAILED TO SEND RESPONSE');
        console.error(err);
    }
};