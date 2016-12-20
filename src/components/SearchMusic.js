import React from 'react';

import Navigation from './Navigation';

const SearchMusic = () =>
    <section className="app">
        <Navigation />
        <main>
            <h2>{'SearchMusic'}</h2>
        </main>
    </section>;

SearchMusic.displayName = 'SearchMusic';

export default SearchMusic;
