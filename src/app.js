import React from 'react';

import { remote } from 'electron';

module.exports = React.createClass({
  render() {
    var userData = remote.app.getPath('userData');

    return (
        <div>
          <h1>Hello React!@@</h1>
          <h2>User Data: {userData}</h2>
        </div>
    );
  }
});