import {itemsPerPage} from '../redux/books/thunks';

export function selectBooksForBookPage(state) {
    return state.booksState.books;
}

export function selectIsLoading(state) {
    return state.booksState.isLoading;
}

export function selectBooksCount(state) {
    return state.booksState.count;
}

export function selectNumberOfPages(state) {
    const count = selectBooksCount(state);
    return Math.ceil(count / itemsPerPage);
}