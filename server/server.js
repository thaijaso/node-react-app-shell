'use strict';

const express = require('express');

const PORT = 3001;

var app = express();

app.use('/', express.static('.'));

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
});