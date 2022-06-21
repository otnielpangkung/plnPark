const express = require('express');
const app = express();
const port = 3001;
const Controller = require('./controller');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', routers)
app.get('/', (req, res) => {
	res.send('Tes 4567891011');
});

app.post('/login', Controller.Login);
app.post('/register', Controller.Register);
app.get('/data', Controller.getAlldata);
app.get('/data/stock', Controller.getStock);
app.post('/data', Controller.addData);
app.post('/data/in', Controller.inCar);
app.patch('/data/out', Controller.outCar);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
