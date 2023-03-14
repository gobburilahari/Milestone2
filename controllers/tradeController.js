const model = require('../models/item')
exports.new = (req,res) => {
    res.render('./trade/tradestart')
}
exports.index = (req,res) =>{
    let trades = model.find()
    res.render('./trade/index',{trades})
}
exports.create = (req,res) => {
    let trade = req.body
    model.save(trade)
    res.redirect('/trades')
}
exports.show = (req,res,next) => {
    let id = req.params.id
    let trade = model.findById(id)
    if(trade){
        return res.render('./trade/show',{trade})
    }else{
        let err = new Error('Cannot find trade with id' + id)
        err.status = 404
        next(err)
    }
}
exports.edit =  (req,res,next) => {
    let id = req.params.id
    let trade = model.findById(id)
    if (!trade) {
        let err = new Error('Cannot find trade with id ' + id)
        err.status = 404
        return next(err)
    } else {
        return res.render('./trade/edit', {trade})
    }
    
}
exports.update =(req,res,next) => {
    let trade = req.body
    console.log(trade)
    let id = req.params.id
    if(model.updateById(id,trade)){
        res.redirect('/trades/'+id)
    }
    else{
        
        let err = new Error('Cannot find trade with id' + id)
        err.status = 404
        next(err)
    }
}
exports.delete = (req,res,next) => {
    // res.send('delete a exiting trade ', req.params.id)
    let id = req.params.id
    if(model.deleteById(id)){
        res.redirect('/trades')
    }
    else{
        let err = new Error('Cannot find trade with id' + id)
        err.status = 404
        next(err)
    }
}
