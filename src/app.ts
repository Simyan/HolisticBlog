import express from 'express';


const app = express();

app.get('/', (req, res) => {
    res.send('Hey there!');
});

app.listen(6101, () => console.log("This is the server"));