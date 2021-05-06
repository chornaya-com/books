import {booksReducer, initialBooksState} from './reducer';
import {setBooks, setIsLoading} from './actions';

describe('books reducer', () => {
    it('simulate loading', () => {
        const stateLoading = booksReducer(initialBooksState, setIsLoading(true));
        expect(stateLoading.isLoading).toBeTruthy();

        const stateLoaded = booksReducer(stateLoading, setIsLoading(false));
        expect(stateLoaded.isLoading).toBeFalsy();
    });

    it('should decorate response and set books', () => {
        const books = [
            {
                id: 2062,
                book_author: ['Ανώνυμος'],
                book_title:
                    'Διήγησις εις τας πράξεις του περιβοήτου στρατηγού των ρωμαίων μεγάλου Βελισαρίου',
                book_publication_year: 1562,
                book_publication_country: 'Ιταλία',
                book_publication_city: 'Βενετία',
                book_pages: 32,
            },
            {
                id: 2063,
                book_author: ['Ανώνυμος', 'Ανώνυμος'],
                book_title:
                    'Διήγησις εις τας πράξεις του περιβοήτου στρατηγού των ρωμαίων μεγάλου Βελισαρίου',
                book_publication_year: 1563,
                book_publication_country: 'Ιταλία',
                book_publication_city: 'Βενετία',
                book_pages: 35,
            },
        ];
        const count = 2;

        const state = booksReducer(initialBooksState, setBooks(books, count));
        expect(state.books).toHaveLength(2);
        expect(state.count).toBe(2);
        expect(state.books[0]).toEqual({
            id: 2062,
            author: 'Ανώνυμος',
            title:
                'Διήγησις εις τας πράξεις του περιβοήτου στρατηγού των ρωμαίων μεγάλου Βελισαρίου',
            year: 1562,
            country: 'Ιταλία',
            city: 'Βενετία',
            pages: 32,
        });
        expect(state.books[1]).toEqual({
            id: 2063,
            author: 'Ανώνυμος, Ανώνυμος',
            title:
                'Διήγησις εις τας πράξεις του περιβοήτου στρατηγού των ρωμαίων μεγάλου Βελισαρίου',
            year: 1563,
            country: 'Ιταλία',
            city: 'Βενετία',
            pages: 35,
        });
    });
});
