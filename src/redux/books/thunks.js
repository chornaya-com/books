import {setBooks, setIsLoading} from './actions';

export const itemsPerPage = 20;

export function fetchBooks(pageNumber = 1, searchText = '') {
    return (dispatch) => {
        const booksUrl = 'http://nyx.vima.ekt.gr:3000/api/books';
        dispatch(setIsLoading(true));
        fetch(booksUrl, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                page: pageNumber,
                itemsPerPage,
                filters: [{type: 'all', values: [searchText]}],
            }),
        })
            .then((response) => response.json())
            .then((result) => {
                const {books, count} = result;
                dispatch(setBooks(books, count));
                dispatch(setIsLoading(false));
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
