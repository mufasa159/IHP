const express = require('express');
const apiRouter = require('../routes');

const app = express();

app.use('/api/ihp-all', apiRouter);

app.listen(process.env.PORT || '3000', () => {
    console.log(`Server is running on port: ${process.env.PORT || '3000'}`);
})