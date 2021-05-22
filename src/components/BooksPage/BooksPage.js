import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {BookCard} from '../BookCard/BookCard';
import * as cn from './BooksPage.module.css';
import {useParams, useHistory} from 'react-router-dom';

export const booksPageTestIds = {
    booksPage: 'Books Page',
}

export function BooksPage(props) {
    const {books, numberOfPages, fetchBooks} = props;
    const {page, searchText = ''} = useParams();
    const pageNumber = page ? parseInt(page) : 1;
    const history = useHistory();

    React.useEffect(() => {
        fetchBooks(pageNumber, searchText);
        window.scrollTo(0, 0);
    }, [fetchBooks, pageNumber, searchText]);

    return (
        <div data-testid={booksPageTestIds.booksPage} className={cn.container}>
            <div className={cn.bookCardsContainer}>
                {books.map((book) => (
                    <BookCard key={book.id} {...book} />
                ))}
            </div>
            <div className={cn.paginationContainer}>
                <Pagination
                    page={pageNumber}
                    count={numberOfPages}
                    color="secondary"
                    onChange={(event, nextPageNumber) => {
                        history.push(`/${nextPageNumber}/${searchText}`);
                    }}
                />
            </div>
        </div>
    );
}
