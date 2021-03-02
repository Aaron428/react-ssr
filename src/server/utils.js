import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../routes';

export const render = (req) => {
  const homeString = renderToString(
    <StaticRouter location={req.path} context={{}}>
      {Routes}
    </StaticRouter>
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
