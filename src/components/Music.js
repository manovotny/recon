import React from 'react';

import Navigation from './Navigation';

const Music = () =>
    <section className="app">
        <Navigation />
        <main>
            <h2>{'Music'}</h2>
        </main>
    </section>;

Music.displayName = 'Music';

export default Music;
