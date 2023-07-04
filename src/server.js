require('dotenv').config({ path: '.env' });

const express = require('express');
const app = express();

const config = require('./configs/configs.js');
config.expressConfig(app, express);
config.handlebarConfig(app);
config.cookieParserConfig(app);
config.expressSessionConfig(app)

//route
require('./routes/routes.js').serverRoute(app);

app.listen(process.env.PORT_LISTEN || 3000, () => {
    console.log('=== !!! SERVER START !!! ===')
});