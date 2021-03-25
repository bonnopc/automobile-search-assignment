import ErrorCode  from './errorCode';

export default (errorEnum) => {

    console.info('⚠️', JSON.stringify(errorEnum, null, 4));
    return ErrorCode(errorEnum);
};