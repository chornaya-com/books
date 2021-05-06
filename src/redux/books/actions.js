export const SET_BOOKS = 'books/SET_BOOKS';

export function setBooks(books, count) {
    return {
        type: SET_BOOKS,
        payload: {
            books,
            count,
        },
    };
}