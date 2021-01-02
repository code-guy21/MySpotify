const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('./client/build/public'));
}

app.use(routes);

app.listen(PORT, () => {
	console.log(`server running in ${process.env.NODE_ENV} mode on PORT:${PORT}`);
});
