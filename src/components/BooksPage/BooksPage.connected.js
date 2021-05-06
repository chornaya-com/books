import {fetchBooks} from '../../redux/books/thunks';
import {connect} from 'react-redux';
import {BooksPage} from './BooksPage';
import {selectBooksForBookPage} from '../../selectors/selectors';

const mapStateToProps = (state) => {
    return {
        books: selectBooksForBookPage(state),
    };
};

const dispatchProps = {
    fetchBooks,
};

export const BooksPageConnected = connect(
    mapStateToProps,
    dispatchProps,
)(BooksPage);
