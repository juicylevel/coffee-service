export default interface Pagination {
    limit: number;
    offset: number;
    total: number;
    hasNext: boolean;
};