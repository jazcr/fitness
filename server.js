const mongoose = require("mongoose");
const express = require("express");

const PORT = process.env.port || 3004;

//added options to silence depracation warnings
mongoose.connect("mongodb://localhost:27017/fitnessDb", { useNewUrlParser: true, useUnifiedTopology: true,
useCreateIndex: true})
    .then(() => console.log("Connected to db!"))
    .catch(e => console.log(e));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/`));
