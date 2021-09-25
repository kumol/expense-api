
const mongoose = require("mongoose");
module.exports = mongoose.model("SpentMoney", mongoose.Schema({
    createdAt: Date,
    spentMoney: Number,
    date: String,
    time: String,
    user: Number,
    day: String,
    month: String,
    year: String,
    details: String
}));
