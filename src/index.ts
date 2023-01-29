import express from 'express';
import morgan from 'morgan';

import fs from 'fs';

const port: string = '8080';
const app = express();

app.use(express.static('static'));
app.use(morgan('common'));
app.use(express.json())


app.post('/plus', (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify({ok: true}));
}).post('/minus', (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify({ok: true}));
}).get('/dist/front.js', (req, res) => {
    fs.readFile('./dist/front.js', 'utf-8', (err, data) => res.send(data))
})


app.listen(port, () => console.log("Server started on port: " + port));