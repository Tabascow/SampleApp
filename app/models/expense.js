var mongoose = require('mongoose');

var paiementMethods = ['Cash','CB','Cheque']

var expense = new mongoose.Schema({
    date:Date,
    title:String,
    amount:Number,
    paiementMethod:{type:String,enum:paiementMethods}
})

module.exports = mongoose.model('Expense',expense);