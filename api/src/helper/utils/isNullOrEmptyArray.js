import isArray from './isArray';
import isNull from './isNull';
import isUndefined from './isUndefined';

export default (value) => (isNull(value) || isUndefined(value) || (isArray(value) && value.length === 0));
