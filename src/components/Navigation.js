import React from 'react';
import {Link} from 'react-router';

const Navigation = () =>
    <nav className="navigation">
        <Link to="/notifications">{'Notifications'}</Link>
        <Link to="/music">{'Music'}</Link>
        <Link to="/movies">{'Movies'}</Link>
        <Link to="/removed">{'Removed'}</Link>
        <Link to="/search">{'Search'}</Link>
    </nav>;

Navigation.displayName = 'Navigation';

export default Navigation;
