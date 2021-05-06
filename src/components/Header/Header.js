import React from 'react';
import * as cn from './Header.module.css';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

export function Header() {
    return (
        <div className={cn.headerContainer}>
            <div className={cn.logoContainer}>
                <div className={cn.title}>Books</div>

                <div className={cn.loader}>
                    <CircularProgress color="primary" />
                </div>
            </div>
            <div>
                <TextField
                    className={cn.inputField}
                    color="secondary"
                    label="Search..."
                    variant="outlined"
                    size="small"
                />
                <IconButton type={'submit'} aria-label="search">
                    <SearchIcon fontSize="small" color="primary" />
                </IconButton>
            </div>
        </div>
    );
}
