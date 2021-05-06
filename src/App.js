import React from 'react';
import {BooksPage} from './components/BooksPage/BooksPage';
import {Header} from './components/Header/Header';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';

function App() {
    const theme = createMuiTheme({
        typography: {
            fontSize: 12,
        },
        palette: {
            primary: {
                main: '#1e444e',
                light: '#4a6f7a',
                dark: '#001d26',
            },
            secondary: {
                main: '#eff3ed',
                light: '#ffffff',
                dark: '#bdc0bb',
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <BooksPage />
        </ThemeProvider>
    );
}

export default App;
