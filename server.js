const express = require("express");
const server = express();
const helmet = require('helmet');
const cors = require('cors');

const router = require('./api/routes/router');

const PORT = process.env.PORT || 3005;

server.use(helmet());
server.use(cors());
server.use('/', router);

server.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
