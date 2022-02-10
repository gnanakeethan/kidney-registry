import { OperationResult } from 'urql';

export interface DataSource<T> {
	currentPage: number;
	nextPage: number;
	prevPage: number;
	totalPages: number;
	perPage: number;
	currentRows: Promise<OperationResult<T>>;

	loadCurrentPage(): Promise<OperationResult<T>>;

	goToNextPage(): Promise<OperationResult<T>>;

	goToPrevPage(): Promise<OperationResult<T>>;

	goToLastPage(): Promise<OperationResult<T>>;

	goToFirstPage(): Promise<OperationResult<T>>;
}
