import React from 'react';
import ReactDOM from 'react-dom';

// Don't edit Root directly, unless you are setting up global configuration.
// For app logic, see App in containers/App.js instead.
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
