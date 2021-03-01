import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from './containers/Home';

const app = express();
const port = 3009;

app.use(express.static('public'));

const homeString = renderToString(<Home />);

app.use('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>react ssr</title>
      </head>
      <body>
        <div id="root">${homeString}</div>
      </body>
      <script src="/index.js"></script>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}/`);
});
