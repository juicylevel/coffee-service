import { some } from 'lodash';
import isEmpty from './isEmpty';

export default (...values: any[]) => (
    some(values, value => (
        isEmpty(value)
    ))
);