import { OperationResult } from 'urql';

export interface DataSource<T> {
	currentPage: number;
	nextPage: number;
	prevPage: number;
	totalPages: number;
	perPage: number;
	currentRows: OperationResult<T>;

	loadCurrentPage(): void;

	goToNextPage(): void;

	goToPrevPage(): void;

	goToLastPage(): void;

	goToFirstPage(): void;
}
