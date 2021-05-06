export const SET_BOOKS = 'books/SET_BOOKS';
export const SET_IS_LOADING = 'books/SET_IS_LOADING';

export function setBooks(books, count) {
    return {
        type: SET_BOOKS,
        payload: {
            books,
            count,
        },
    };
}

export function setIsLoading(isLoading) {
    return {
        type: SET_IS_LOADING,
        payload: isLoading,
    };
}
