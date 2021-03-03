import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import routes from '../routes';
import {Provider} from 'react-redux';

import {getClientStore} from '../store';

const App = () => {
  const store = getClientStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.hydrate(<App />, document.getElementById('root'));
