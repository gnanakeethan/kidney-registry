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
	pagination = {};

	constructor(private queryRepository: QueryRepository<T>, private query: DocumentNode) {}

	loadCurrentPage(filter: object): Promise<OperationResult<T>> {
		this.currentRows = this.queryRepository.getItems(
			this.query,
			filter,
			this.currentPage,
			this.perPage
		);
		return this.currentRows;
	}

	goToFirstPage(filter: object): Promise<OperationResult<T>> {
		this.currentRows = this.queryRepository.getItems(this.query, filter, 1, this.perPage);
		return this.currentRows;
	}

	goToLastPage(filter: object): Promise<OperationResult<T>> {
		this.currentRows = this.queryRepository.getItems(
			this.query,
			filter,
			this.totalPages,
			this.perPage
		);
		return this.currentRows;
	}

	gotoPage(filter: object, page: number): Promise<OperationResult<T>> {
		this.currentPage = page;
		console.log(page);
		this.currentRows = this.queryRepository.getItems(this.query, filter, page, this.perPage);
		return this.currentRows;
	}

	goToNextPage(filter: object): Promise<OperationResult<T>> {
		this.currentRows = this.queryRepository.getItems(
			this.query,
			filter,
			++this.currentPage,
			this.perPage
		);
		return this.currentRows;
	}

	goToPrevPage(filter: object): Promise<OperationResult<T>> {
		if (this.currentPage > 1) {
			this.currentRows = this.queryRepository.getItems(
				this.query,
				filter,
				--this.currentPage,
				this.perPage
			);
			return this.currentRows;
		}
	}
}
