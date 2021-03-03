import express from 'express';
import routes from '../routes';
import {matchPath} from 'react-router-dom';
import {render} from './utils';
import {getStore} from '../store';

const app = express();
const port = 3009;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = getStore();

  const matchedRoutes = [];
  const promises = [];

  routes.some((route) => {
    const match = matchPath(req.path, route);
    if (match) {
      matchedRoutes.push(route);
    }
  });
  matchedRoutes.forEach((item) => {
    if (item.loadData) {
      promises.push(item.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    const html = render(store, routes, req.path);
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}/`);
});
