import React from 'react';
import ReactDOM from 'react-dom';
import {
  IndexRoute,
  Link,
  Route,
  Router,
  browserHistory,
} from 'react-router';

import App from './js/App';
import Sandbox from './js/Sandbox';

function Hello() {
  return <div>Hello there</div>;
}

function Root() {
  return (
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={App} />
        <Route path='sandbox*' component={Sandbox} />
      </Route>
    </Router>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
