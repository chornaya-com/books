import {SET_BOOKS, SET_IS_LOADING} from './actions';

export const initialBooksState = {
    books: [],
    count: 0,
    isLoading: false,
};

export function booksReducer(state = initialBooksState, action) {
    switch (action.type) {
        case SET_BOOKS: {
            const books = action.payload.books.map((book) => {
                return {
                    id: book.id,
                    title: book.book_title,
                    author: book.book_author.join(' '),
                    year: book.book_publication_year,
                    country: book.book_publication_country,
                    city: book.book_publication_city,
                    pages: book.book_pages,
                };
            });

            return {
                ...state,
                books,
                count: action.payload.count,
            };
        }
        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}
