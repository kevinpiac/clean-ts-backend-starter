import 'module-alias/register';

import { log } from './utils/logger';
import app from './app';

const { SERVER_BASE_URL } = process.env;
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  log('http')(`Starting server at -> ${SERVER_BASE_URL}:${PORT}`);
});
