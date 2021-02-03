const mongoose = require('mongoose');
mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB conection error'));
db.once('open', () => console.log('DB conectada'))

