import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

export const render = (store, routes, path) => {
  const homeString = renderToString(
    <Provider store={store}>
      <StaticRouter location={path} context={{}}>
        <React.Fragment>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </React.Fragment>
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head>
        <title>react ssr</title>
      </head>
      <body>
        <div id="root">${homeString}</div>
      </body>
      <script>
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
      <script src="/index.js"></script>
    </html>
  `;
};
