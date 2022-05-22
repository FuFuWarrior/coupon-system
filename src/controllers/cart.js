const {sequelize, Cart} = require('../models/models/')

class Carts{

    static async addCartItem(req, res){
        try {
            const {item_name, item_price, item_quantity} = req.body;
            let cart = await Cart.create({item_name, item_price, item_quantity});

            res.status(201).json({
                status: 'success',
                data: {
                    message: 'cart created successfully',
                    cart
                }
            });

        } catch (error) {
            res.status(500).json({
                status: 'error',
                error: 'Something Unexpected happened',
                error
            });
        }
    }

    static async getCartItems(req, res){
        try {
            let totalPrice = 0;
            let cart = await Cart.findAll(); 

            // get the total of the cart
            cart.forEach((item) => {
                let price = item.item_price * item.item_quantity;
                console.log(totalPrice, price)
                totalPrice += price;
            });

            res.status(200).json({
                status: 'success',
                data: cart,
                totalPrice
            })  
        } catch (error) {
            res.status(500).json({
                status: 'error',
                error: 'something unexpected happened',
                error
            })
        }
        res.status
    }
}

module.exports = Carts;