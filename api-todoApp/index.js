const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

require('./app/routes/route.js')(app);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});