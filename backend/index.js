/* eslint-disable no-console */
require('dotenv').config();
const app = require('./app');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dir: './frontend', dev });
const handler = nextApp.getRequestHandler();
require('./database');
require('./src/services/passport');

async function main() {
  try {
    await nextApp.prepare();
    app.use('/', require('./src/routes/private.pages.routes'));
    app.use('/', require('./src/routes/public.pages.routes'));
    app.get('*', (req, res) => {
      return handler(req, res);
    });
    app.listen(app.get('port'));
    console.log('>> SERVER ON PORT 3000');
  } catch (e) {
    console.log('>> PROBLEM IN SERVER');
    console.log(e);
  }
}

main();

module.exports = nextApp;
