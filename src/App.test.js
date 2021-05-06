import {render, screen} from '@testing-library/react';
import App from './App';
import {headerTestIds} from './components/Header/Header';
import {booksPageTestIds} from './components/BooksPage/BooksPage';

describe('test App', () => {
    it('renders Books Page and Header components', async () => {
        window.scrollTo = jest.fn();

        render(<App />);

        const header = await screen.findByTestId(headerTestIds.header);
        expect(header).toBeInTheDocument();

        const booksPage = await screen.findByTestId(booksPageTestIds.booksPage);
        expect(booksPage).toBeInTheDocument();
    });
});
