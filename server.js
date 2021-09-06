const express = require("express");
const mongoose = require("mongoose");
const api1 = require('./routes/workoutRoutes.js');
const api2 = require('./routes/homeRoutes.js');

const PORT = process.env.PORT || 3004;


mongoose.set('debug', true);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.use(api1);
app.use(api2);
// app.use(require('./routes/homeRoutes.js'));
// app.use(api);
// app.use(home);


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});