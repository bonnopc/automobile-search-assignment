import type from './type';

export default (value) => (value === null && type(value) === '[object Null]');
