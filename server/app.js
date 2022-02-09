const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


require('dotenv').config();

const port = process.env.port || 7070;

require('./routes/customer.router.js')(app);


app.listen(port, (err) => {
    if (!err) {
        console.log('Listening to port', port)
    } else {
        console.log('Error')
    }
})

