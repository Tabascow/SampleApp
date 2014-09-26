var mongoose = require('mongoose');


var revenue = new mongoose.Schema({
    title:String,
    date:Date,
    amountInCash:Number,
    amountInCheque:Number,
    amountInCb:Number,
    details:String
})

module.exports = mongoose.model('Revenue',revenue);