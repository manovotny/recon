import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {IndexRedirect, Router, Route, hashHistory} from 'react-router';

import configureStore from '../renderer/store';
import {route} from '../renderer/actions';
import App from './components/App';
import Notifications from './components/Notifications';
import Music from './components/Music';
import Movies from './components/Movies';
import Removed from './components/Removed';
import Search from './components/Search';
import SearchMovies from './components/SearchMovies';
import SearchMusic from './components/SearchMusic';

import './index.scss';

const store = configureStore();

render(
    <Provider store={store}>
        <Router
            history={hashHistory}
            onUpdate={() => store.dispatch(route(hashHistory.getCurrentLocation().pathname))}
        >
            <Route
                component={App}
                path="/"
            >
                <IndexRedirect to={store.getState().route} />
                <Route
                    component={Notifications}
                    path="notifications"
                />
                <Route
                    component={Music}
                    path="music"
                />
                <Route
                    component={Movies}
                    path="movies"
                />
                <Route
                    component={Removed}
                    path="removed"
                />
                <Route
                    component={Search}
                    path="search"
                />
                <Route
                    component={SearchMovies}
                    path="search/movies"
                />
                <Route
                    component={SearchMusic}
                    path="search/music"
                />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
