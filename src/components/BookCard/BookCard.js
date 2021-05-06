import React from 'react';
import * as cn from './BookCard.module.css';

export class BookCard extends React.Component {
    render() {
        return (
            <div className={cn.container}>
                <div className={cn.title}>Book Title</div>
                <div className={cn.author}> by Author</div>
                <div className={cn.detailsContainer}>
                    <p>London</p>
                    <p>UK</p>
                    <p>2021</p>
                </div>
                <div className={cn.pages}>Number of pages: 100</div>
            </div>
        );
    }
}
