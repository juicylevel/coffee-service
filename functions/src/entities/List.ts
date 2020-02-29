// TODO: use import {} from '.';
import Pagination from './Pagination';

export default interface List {
    pagination: Pagination;
    total: number;
    hasNext: boolean;
    items: any[];
};