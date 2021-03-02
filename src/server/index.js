import express from 'express';
import {render} from './utils';
const app = express();
const port = 3009;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const html = render(req);
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}/`);
});
