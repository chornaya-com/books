import React from 'react';
import * as cn from './Header.module.css';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useHistory, Link} from 'react-router-dom';

export const headerTestIds = {
    loader: 'Loader',
    header: 'Header',
};

export function Header(props) {
    const {isLoading} = props;
    const history = useHistory();
    const [searchText, setSearchText] = React.useState('');

    const search = (event) => {
        event.preventDefault();
        history.push(`/1/${searchText}`);
    };

    const onChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <div data-testid={headerTestIds.header} className={cn.headerContainer}>
            <div className={cn.logoContainer}>
                <Link className={cn.title} to={'/'}>
                    Books
                </Link>
                {isLoading && (
                    <div data-testid={headerTestIds.loader} className={cn.loader}>
                        <CircularProgress color="secondary" />
                    </div>
                )}
            </div>

            <form onSubmit={search}>
                <TextField
                    className={cn.inputField}
                    color="secondary"
                    label="Search..."
                    variant="outlined"
                    size="small"
                    value={searchText}
                    onChange={onChange}
                />
                <IconButton type={'submit'} aria-label="search">
                    <SearchIcon fontSize="small" color="secondary" />
                </IconButton>
            </form>
        </div>
    );
}
