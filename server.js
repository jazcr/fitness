const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3004;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.set('debug', true);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/fitnessDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// app.use(api);
// app.use(home);


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});