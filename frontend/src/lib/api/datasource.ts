export interface DataSource<T> {
	currentPage: number;
	nextPage: number;
	prevPage: number;
	totalPages: number;
	perPage: number;
	currentRows: T[];

	goToNextPage(): void;

	goToPrevPage(): void;

	goToLastPage(): void;

	goToFirstPage(): void;
}
