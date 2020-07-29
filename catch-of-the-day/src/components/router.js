import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './store-picker';
import App from './app';
import NotFound from './not-found';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={StorePicker} exact />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);
    

export default Router;