import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Redirect, Router, Route, hashHistory} from 'react-router';

import {route} from '../actions';

import Notifications from './Notifications';
import Music from './Music';
import Movies from './Movies';
import Removed from './Removed';
import Search from './Search';
import SearchMovies from './SearchMovies';
import SearchMusic from './SearchMusic';

class Root extends React.Component {
    componentDidMount() {
        require('./Root.scss');
    }

    render() {
        const {store} = this.props;

        return (
            <Provider store={store}>
                <Router
                    history={hashHistory}
                    onUpdate={() => store.dispatch(route(hashHistory.getCurrentLocation().pathname))}
                >
                    <Route
                        component={Notifications}
                        path="/notifications"
                    />
                    <Route
                        component={Music}
                        path="/music"
                    />
                    <Route
                        component={Movies}
                        path="/movies"
                    />
                    <Route
                        component={Removed}
                        path="/removed"
                    />
                    <Route
                        component={Search}
                        path="/search"
                    />
                    <Route
                        component={SearchMovies}
                        path="/search/movies"
                    />
                    <Route
                        component={SearchMusic}
                        path="/search/music"
                    />
                    <Redirect
                        from="/"
                        to={store.getState().route}
                    />
                </Router>
            </Provider>
        );
    }
}

Root.displayName = 'Root';

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
