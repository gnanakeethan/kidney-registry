import { OperationResult } from '@urql/svelte/dist/types';
import { DocumentNode } from 'graphql';
import { DataSource } from 'lib/interfaces/datasource';
import { QueryRepository } from 'lib/interfaces/repository';

export class DataSourceConnector<T> implements DataSource<T> {
	currentPage = 1;
	nextPage = 2;
	perPage = 15;
	prevPage: number;
	totalPages = 2;
	currentRows: OperationResult<T>;

	constructor(private queryRepository: QueryRepository<T>, private query: DocumentNode) {}

	loadCurrentPage(): void {
		this.currentRows = this.queryRepository.getItems(this.query, this.currentPage, this.perPage);
		console.log(this.currentRows);
	}

	goToFirstPage(): void {
		this.currentRows = this.queryRepository.getItems(this.query, 1, this.perPage);
	}

	goToLastPage(): void {
		this.currentRows = this.queryRepository.getItems(this.query, this.totalPages, this.perPage);
	}

	goToNextPage(): void {
		this.currentRows = this.queryRepository.getItems(this.query, ++this.currentPage, this.perPage);
	}

	goToPrevPage(): void {
		if (this.currentPage > 1) {
			this.currentRows = this.queryRepository.getItems(
				this.query,
				--this.currentPage,
				this.perPage
			);
		}
	}
}
