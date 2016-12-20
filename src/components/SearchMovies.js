import React from 'react';

import Navigation from './Navigation';

const SearchMovies = () =>
    <section className="app">
        <Navigation />
        <main>
            <h2>{'SearchMovies'}</h2>
        </main>
    </section>;

SearchMovies.displayName = 'SearchMovies';

export default SearchMovies;
