import React from 'react';

import Navigation from './Navigation';

const Movies = () =>
    <section className="app">
        <Navigation />
        <main>
            <h2>{'Movies'}</h2>
        </main>
    </section>;

Movies.displayName = 'Movies';

export default Movies;
