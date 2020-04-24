import { createServer } from 'http';

import app from './app';
import { PORT } from './config';

const server = createServer(app);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listen on: http://0.0.0.0:${PORT}`);
});
