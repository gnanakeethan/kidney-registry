export class DataSourceConnector {
    constructor(queryRepository, query) {
        this.queryRepository = queryRepository;
        this.query = query;
        this.currentPage = 1;
        this.nextPage = 2;
        this.perPage = 15;
        this.totalPages = 2;
        this.pagination = {};
    }
    loadCurrentPage(filter) {
        this.currentRows = this.queryRepository.getItems(this.query, filter, this.currentPage, this.perPage);
        return this.currentRows;
    }
    goToFirstPage(filter) {
        this.currentRows = this.queryRepository.getItems(this.query, filter, 1, this.perPage);
        return this.currentRows;
    }
    goToLastPage(filter) {
        this.currentRows = this.queryRepository.getItems(this.query, filter, this.totalPages, this.perPage);
        return this.currentRows;
    }
    gotoPage(filter, page) {
        this.currentPage = page;
        console.log(page);
        this.currentRows = this.queryRepository.getItems(this.query, filter, page, this.perPage);
        return this.currentRows;
    }
    goToNextPage(filter) {
        this.currentRows = this.queryRepository.getItems(this.query, filter, ++this.currentPage, this.perPage);
        return this.currentRows;
    }
    goToPrevPage(filter) {
        if (this.currentPage > 1) {
            this.currentRows = this.queryRepository.getItems(this.query, filter, --this.currentPage, this.perPage);
            return this.currentRows;
        }
    }
}
//# sourceMappingURL=table-datasource.js.map