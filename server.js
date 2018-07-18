const express = require('express');
const app = express();
const lis = require('./index');

app.get('/events/:calenderEvents', (req, res) => {
    console.log(req.params.calenderEvents);
    res.send()
});

app.listen(3001, () => {
    console.log('App listening on port 3001!')
});