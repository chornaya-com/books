import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {BookCard} from '../BookCard/BookCard';
import * as cn from './BooksPage.module.css';

export function BooksPage(props) {
    const {books, numberOfPages, fetchBooks} = props;

    React.useEffect(() => {
        fetchBooks();
        window.scrollTo(0, 0);
    }, [fetchBooks]);

    return (
        <div className={cn.container}>
            <div className={cn.bookCardsContainer}>
                {books.map((book) => (
                    <BookCard key={book.id} {...book} />
                ))}
            </div>
            <div className={cn.paginationContainer}>
                <Pagination count={numberOfPages} color="secondary" />
            </div>
        </div>
    );
}
