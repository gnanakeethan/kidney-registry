import { OperationResult } from '@urql/svelte/dist/types';
import { DocumentNode } from 'graphql';
import { DataSource } from 'lib/interfaces/datasource';
import { QueryRepository } from 'lib/interfaces/query-repository';

export class DataSourceConnector<T> implements DataSource<T> {
	currentPage = 1;
	nextPage = 2;
	perPage = 15;
	prevPage: number;
	totalPages = 2;
	currentRows: Promise<OperationResult<T>>;

	constructor(private queryRepository: QueryRepository<T>, private query: DocumentNode) {}

	loadCurrentPage(): Promise<OperationResult<T>> {
		this.currentRows = this.queryRepository.getItems(this.query, this.currentPage, this.perPage);
		return this.currentRows;
	}

	goToFirstPage(): Promise<OperationResult<T>> {
		this.currentRows = this.queryRepository.getItems(this.query, 1, this.perPage);
		return this.currentRows;
	}

	goToLastPage(): Promise<OperationResult<T>> {
		this.currentRows = this.queryRepository.getItems(this.query, this.totalPages, this.perPage);
		return this.currentRows;
	}

	goToNextPage(): Promise<OperationResult<T>> {
		this.currentRows = this.queryRepository.getItems(this.query, ++this.currentPage, this.perPage);
		return this.currentRows;
	}

	goToPrevPage(): Promise<OperationResult<T>> {
		if (this.currentPage > 1) {
			this.currentRows = this.queryRepository.getItems(
				this.query,
				--this.currentPage,
				this.perPage
			);
			return this.currentRows;
		}
	}
}
