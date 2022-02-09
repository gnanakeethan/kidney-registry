import { OperationResult, PromisifiedSource } from 'urql';

export interface DataSource<T> {
	currentPage: number;
	nextPage: number;
	prevPage: number;
	totalPages: number;
	perPage: number;
	currentRows: PromisifiedSource<OperationResult<T>>;

	loadCurrentPage(): void;

	goToNextPage(): void;

	goToPrevPage(): void;

	goToLastPage(): void;

	goToFirstPage(): void;
}
