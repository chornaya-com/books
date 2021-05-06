import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {BookCard} from '../BookCard/BookCard';
import * as cn from './BooksPage.module.css';

export function BooksPage() {
    return (
        <div className={cn.container}>
            <div className={cn.bookCardsContainer}>
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
            <div className={cn.paginationContainer}>
                <Pagination count={10} color="secondary" />
            </div>
        </div>
    );
}
