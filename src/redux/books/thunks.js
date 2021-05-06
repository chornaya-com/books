import {setBooks} from './actions';

export function fetchBooks(pageNumber = 1, searchText = '') {
    return (dispatch) => {
        const booksUrl = 'http://nyx.vima.ekt.gr:3000/api/books';
        fetch(booksUrl, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                page: pageNumber,
                itemsPerPage: 20,
                filters: [{type: 'all', values: [searchText]}],
            }),
        })
            .then((response) => response.json())
            .then((result) => {
                const {books, count} = result;
                dispatch(setBooks(books, count));
            })
            .catch((error) => {
                console.error(error);
            });
    };
}