import React from 'react';
import * as cn from './BookCard.module.css';

export class BookCard extends React.Component {
    render() {
        const {title, author, year, country, city, pages} = this.props;
        return (
            <div className={cn.container}>
                <div className={cn.title}>{title}</div>
                <div className={cn.author}> by {author}</div>
                <div className={cn.detailsContainer}>
                    <p>{city}</p>
                    <p>{country}</p>
                    <p>{year}</p>
                </div>
                <div className={cn.pages}>Number of pages: {pages}</div>
            </div>
        );
    }
}
