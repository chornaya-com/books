import React from 'react';
import {Header, headerTestIds} from './Header';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Loader', () => {
    it('loader should be visible', async () => {
        const props = {
            isLoading: true,
        };

        render(
            <Router>
                <Header {...props} />
            </Router>,
        );

        const loader = await screen.findByTestId(headerTestIds.loader);
        expect(loader).toBeVisible();
    });

    it('loader should not be visible', async () => {
        const props = {
            isLoading: false,
        };

        render(
            <Router>
                <Header {...props} />
            </Router>,
        );

        const loader = await screen.queryByTestId(headerTestIds.loader);
        expect(loader).not.toBeInTheDocument();
    });
});
