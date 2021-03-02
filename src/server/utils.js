import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Routes from '../routes';

import getStore from '../store';

export const render = (req) => {
  const homeString = renderToString(
    <Provider store={getStore()}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
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
      <script src="/index.js"></script>
    </html>
  `;
};
