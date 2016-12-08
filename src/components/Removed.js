import React from 'react';

import Navigation from './Navigation';

const Removed = () =>
    <section className="app">
        <Navigation />
        <main>
            <h2>{'Removed'}</h2>
        </main>
    </section>;

Removed.displayName = 'Removed';

export default Removed;
