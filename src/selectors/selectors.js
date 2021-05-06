export function selectBooksForBookPage(state) {
    return state.booksState.books;
}

export function selectIsLoading(state) {
    return state.booksState.isLoading;
}
