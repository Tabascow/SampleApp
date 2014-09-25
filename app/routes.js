var Expense = require('./models/expense');

module.exports = function(app,router) {


    // server routes ===========================================================
    // handle things like api calls
    // authentication routes


    router.use(function(req,res,next){
        console.log('Something is requested via the API');
        next();
    })

    router.get('/', function(req,res){
        res.json({message:'Welcome to the API'});
    })


    router.route('/expenses')
        .post(function(req,res){
            var expense = new Expense();
            expense.title = req.body.title;
            expense.date = new Date(req.body.date);
            expense.amount= req.body.amount;
            expense.paiementMethod= req.body.paiementMethod;

            expense.save(function(err){
                if(err){res.send(err);}

                res.json({message:'Expense created!'});
            });
        })
    .get(function(req,res){
        Expense.find( function(err,expenses){
            if(err){res.send(err);}

            res.json(expenses);
        })
    })

    router.route('/expenses/:expense_id')
        .get(function(req,res){
            Expense.findById(req.params.expense_id,function(err,expense){
                if(err){res.send(err);}

                res.json(expense);
            });
        })
        .put(function(req,res){
            Expense.findById(req.params.expense_id,function(err,expense){
                if(err){res.send(err);}

                expense.title = req.body.title;
                expense.date = new Date(req.body.date);
                expense.amount= req.body.amount;
                expense.paiementMethod= req.body.paiementMethod;

                expense.save(function(err){
                    if(err){res.send(err);}

                    res.json({message:'Expense updated'});
                })
            })
        })
        .delete(function(req,res){
            Expense.remove({
                _id:req.params.expense_id
            },function(err){
                if(err){res.send(err);}

                res.json({message: 'Expense deleted'});
            });
        });


    // REGISTER OUR ROUTES -------------------------------
    // all of our routes will be prefixed with /api

    app.use('/api',router);



    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile('/public/views/index.html'); // load our public/index.html file
    });

};
