import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {BooksPageConnected} from './components/BooksPage/BooksPage.connected';
import {HeaderConnected} from './components/Header/Header.connected';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <HeaderConnected />
                    <Switch>
                        <Route path="/:page?/:searchText?">
                            <BooksPageConnected />
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
