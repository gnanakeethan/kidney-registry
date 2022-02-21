import { OperationResult } from 'urql';

export interface DataSource<T> {
	currentPage: number;
	nextPage: number;
	prevPage: number;
	totalPages: number;
	perPage: number;
	currentRows: Promise<OperationResult<T>>;

	loadCurrentPage(filter: object): Promise<OperationResult<T>>;

	goToNextPage(filter: object): Promise<OperationResult<T>>;

	goToPrevPage(filter: object): Promise<OperationResult<T>>;

	goToLastPage(filter: object): Promise<OperationResult<T>>;

	goToFirstPage(filter: object): Promise<OperationResult<T>>;
}
