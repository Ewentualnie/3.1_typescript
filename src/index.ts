import express from 'express';

import fs from 'fs';

const port: string = '8080';
const app = express();

app.use(express.static('static'));
app.use(express.json())

enum Buttons {
    PLUS,
    MINUS
}
let plus: number = 0,
    minus: number = 0;

app.get('/front.js', (req, res) => {
    fs.readFile('./dist/front.js', 'utf-8', (err, data) => res.send(data))
}).post('/button', (req, res) => {
    switch (req.body.button) {
        case Buttons.PLUS:
            plus++;
            res.send(JSON.stringify({ button: plus }));
            break;
        case Buttons.MINUS:
            minus++;
            res.send(JSON.stringify({ button: minus }));
            break;
        default:
            break;
    }
})


app.listen(port, () => console.log("Server started on port: " + port));