// our dependencies
const express = require('express');
const app = express();

// from top level path e.g. localhost:3000, this response will be sent
app.get('/', (request, response) => response.send('Hello World'));

app.post('/gms/rest/thirdparty/identityInfo', (request, response) => response.send('Hello World'));

// set the server to listen on port 3000
app.listen(80, () => console.log('Listening on port 80'));
