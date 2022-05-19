const {sequelize, Cart} = require('../models/models/')

class CartItems{

    static async addCartItem(req, res){
        try {
            const {item_name, item_price, item_quantity} = req.body;
            let cart = await Cart.create({item_name, item_price, item_quantity});  
            res.status(201).json({
                status: 'success',
                data: {
                    message: 'cart created successfully'
                }
            }) 
        } catch (error) {
            res.status(500).json({
                status: 'error',
                error: 'Something Unexpected happened'
            })
        }
    }

    static async getCartItems(req, res){

    }
}

module.exports = CartItems;

// exports.addCartItem(req, req){
//     const {item_name, item_price, item_quantity} = req.body;
    
// }

// exports.getCartItems(req, req){

// }