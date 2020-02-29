import { isObject, isEmpty, isArray } from 'lodash';

export default (value: any) => {
    let result: boolean;
    if (isObject(value) || isArray(value)) {
        result = isEmpty(value);
    } else {
        result = (
            value === null || 
            value === undefined || 
            value === ''
        );
    }
    return result;
};