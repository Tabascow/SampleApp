var Revenue = require('./../models/revenue');

module.exports = function(router){
    router.route('/revenues')
        .post(function(req,res){
            var revenue = new Revenue();
            revenue.title = req.body.title;
            revenue.date = new Date(req.body.date);
            revenue.amountInCash= req.body.amountInCash;
            revenue.amountInCheque= req.body.amountInCheque;
            revenue.amountInCb= req.body.amountInCb;
            revenue.details= req.body.details;

            revenue.save(function(err){
                if(err){res.send(err);}

                res.json({message:'Revenue created!'});
            });
        })
        .get(function(req,res){
            Revenue.find( function(err,revenues){
                if(err){res.send(err);}

                res.json(revenues);
            })
        })

    router.route('/revenues/:revenue_id')
        .get(function(req,res){
            Revenue.findById(req.params.revenue_id,function(err,revenue){
                if(err){res.send(err);}

                res.json(revenue);
            });
        })
        .put(function(req,res){
            Revenue.findById(req.params.revenue_id,function(err,revenue){
                if(err){res.send(err);}

                revenue.title = req.body.title;
                revenue.date = new Date(req.body.date);
                revenue.amountInCash= req.body.amountInCash;
                revenue.amountInCheque= req.body.amountInCheque;
                revenue.amountInCb= req.body.amountInCb;
                revenue.details= req.body.details;

                revenue.save(function(err){
                    if(err){res.send(err);}

                    res.json({message:'Revenue updated'});
                })
            })
        })
        .delete(function(req,res){
            Revenue.remove({
                _id:req.params.revenue_id
            },function(err){
                if(err){res.send(err);}

                res.json({message: 'Revenue deleted'});
            });
        });
}
