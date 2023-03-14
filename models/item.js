const {v4:uuidv4} = require('uuid')
const trades = [
        {
            id : '1',
            title : 'Lights',
            category : 'Home Decors',
            details : 'Dimunt floor lamp build-in 112 pcs high brightness LEDs, and with arcuated lights design which can increase light range, up to 1000 Lumen is enough for reading in living room or bedroom. ',
            status : 'Traded',
            image : 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61e7mhgJijL._AC_SL1500_.jpg',
        },
        {
            id : '2',
            title : 'Frames',
            category : 'Home Decors',
            details : 'Pinzon 4x6 Picture Frames Glass, Mirrored Edge Photo Frame for Tabletop Display, Silver (Set of 4)',
            status : 'Un-traded',
            image : 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71YIOQnx07L._AC_SX679_.jpg',
        },
        {
            id : '3',
            title : 'Organisers',
            category : 'Home Decors',
            details : ' Collapsible Fabric Storage Cubes Organizer with Handles, 10.5"x10.5"x11", Grey - Pack of 6',
            status : 'Traded',
            image : 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91u0Pp4HBdL._AC_SL1500_.jpg',
        },
        {
            id : '4',
            title : 'Sofa',
            category : 'Furniture',
            details : 'our new 2 seater sofa will form the heart of your living room. Whether you’re creating a cosy, intimate lounge or using your sofa as part of a larger seating area.',
            status : 'Traded',
            image : 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-cartoon-brown-sofa-png-download-png-image_4680151.jpg',
        },
        {
            id : '5',
            title : 'Table',
            category : 'Furniture',
            details : 'Morden design: Great for home office, studio, bedroom and also kitchen as a dinning table',
            status : 'Traded',
            image : 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51KB6Ct2E4L._AC_SX679_.jpg',
        },
        {
            id : '6',
            title : 'Bed',
            category : 'Furniture',
            details : 'Foldable Metal Platform Bed Frame with Tool Free Setup, 14 Inches High, Full, Black',
            status : 'Un-traded',   
            image : 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61a4iD81WvL.__AC_SY300_SX300_QL70_FMwebp_.jpg',

        },
]

exports.find = () => trades

exports.findById = id =>  trades.find(trade => trade.id === id)


exports.save = trade => {
    trade.id = uuidv4()
    trades.push(trade)
}

exports.updateById = (id,newtrade) => {
    let trade = trades.find(trade => trade.id === id)
    if(trade){
    trade.title = newtrade.title
    trade.details = newtrade.details
    trade.category = newtrade.category
    trade.status = newtrade.status
    trade.image = newtrade.image
    return true
    }
    else{
        return false
    }
}

exports.deleteById = (id) =>{
    let index = trades.findIndex(trade => trade.id === id)
    console.log(id,index)
    if(index !== -1){
        trades.splice(index,1)
        return true
    }
    else{
        return false
    }
}