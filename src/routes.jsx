import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';

const routes = () => {
    return (
        <BrowserRouter>
            <Route exact component={Home} path="/" />
        </BrowserRouter>
    );
};

export default routes;