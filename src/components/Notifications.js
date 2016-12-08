import React from 'react';

import Navigation from './Navigation';

const Notifications = () =>
    <section className="app">
        <Navigation />
        <main>
            <h2>{'Notifications'}</h2>
        </main>
    </section>;

Notifications.displayName = 'Notifications';

export default Notifications;
