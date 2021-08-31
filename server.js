const mongoose = require("mongoose");
const express = require("express");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/db", { useNewUrlParser: true });
