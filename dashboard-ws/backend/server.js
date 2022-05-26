let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
require('dotenv').config();

// Express Route
const transactionRoute = require('../backend/routes/transaction.route')
const memberRoute = require('../backend/routes/member.route')
const serviceRoute = require('./routes/service.route')

// Connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DBURI).then(() => {
console.log('Database successfully connected!')
},
error => {
	console.log('Could not connect to database : ' + error)
}
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(cors());
app.use('/transaction', transactionRoute)
app.use('/member', memberRoute)
app.use('/service', serviceRoute)


// PORT
const port = process.env.PORT;
const server = app.listen(port, () => {
console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
res.status(404).send('Error 404!')
});

app.use(function (err, req, res, next) {
console.error(err.message);
if (!err.statusCode) err.statusCode = 500;
res.status(err.statusCode).send(err.message);
});
