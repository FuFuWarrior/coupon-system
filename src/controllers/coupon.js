const {sequelize, Coupon, Cart} = require('../models/models');

// const {Cart} = require('../models/models');

class Coupons{

    static async addCouponCode(req, res){

        try {
            const {code, is_valid, discount_type, discount, discount_limit, items_limit} = req.body;
            let coupon = await Coupon.create({code, is_valid, discount_type, discount, discount_limit, items_limit});
            res.status(201).json({
                status: 'success',
                data: {
                    coupon,
                    message: 'coupons added successfully'
                }
            });

        } catch (error) {
            res.status(500).json({
                status: 'error',
                error: 'something unexpected happened',
                error
            })
        }
    }

    static async checkCouponCode(req, res){

        // ! if code is not in the db it goes straith to the catch block
        // ! it should be caught by the else block
            try {
                
                const {code} = req.body;
            
                const cart = await Cart.findAll();

                let  totalPrice = 0;
                cart.forEach((item) => {
                    let price = item.item_price * item.item_quantity;
                    totalPrice += price;
                });

                const coupon = await Coupon.findOne({where: { code }});
            
                if(coupon){ 
                    if (coupon.is_valid){
                        // check the discount_type
                        
                            if ( coupon.discount_type === 'percent'){
                                if (cart.length > coupon.items_limit){ 
                                    
                                    if ( totalPrice > coupon.discount_limit) {
                                        let discount = Math.floor(totalPrice * (coupon.discount / 100));
                                    
                                        let adjustedTotalPrice = Math.floor(totalPrice - discount);
                                    
                                        res.status(200).json({
                                            cart,
                                            totalPrice,
                                            adjustedTotalPrice,
                                            discount
                                        });
                                    }else{

                                        res.status(404).json({
                                            status: 'error',
                                            error: 'total price is too low to qualify'
                                        });
                                    }
                                    
                                }else {
                                    res.status(404).json({
                                        status: 'error',
                                        error: 'total price is too low to qualify'
                                    });
                                }   
                            }else if (coupon.discount_type === 'fixed'){
                                if (cart.length > coupon.items_limit){
                                    
                                    if (totalPrice > coupon.discount_limit){
                                      
                                        let adjustedTotalPrice = totalPrice - coupon.discount;
        
                                        res.status(200).json({
                                            cart,
                                            totalPrice,
                                            adjustedTotalPrice,
                                            discount: coupon.discount
                                        });
                                    } else{

                                        res.status(200).json({
                                            status: 'error',
                                            error: 'total price is too low to qualify'
                                        })
                                    }
                                }else{
                                    res.status(404).json({
                                        status: 'error',
                                        error: `You need at least ${coupon.items_limit} in the cart`
                                    })
                                }
                            }else if (coupon.discount_type === 'mixed'){

                                if (cart.length > coupon.items_limit){

                                    if (totalPrice > coupon.discount_limit){

                                        let discountFixedPrice = totalPrice - coupon.discount;

                                        let discountPercentageAmount = Math.floor(totalPrice * (coupon.discount / 100));
                                        let discountPercentagePrice = totalPrice - discountPercentageAmount;

                                        if (discountFixedPrice < discountPercentagePrice){

                                            return res.status(200).json({
                                                cart,
                                                totalPrice,
                                                adjustedTotalPrice: discountFixedPrice,
                                                discount: coupon.discount
                                            });
                                        }

                                        return res.status(200).json({
                                            cart,
                                            totalPrice,
                                            adjustedTotalPrice: discountPercentagePrice,
                                            discount: discountPercentageAmount

                                        });

                                }else{
                                    res.status(404).json({
                                        status: 'error',
                                        error : 'total price is too low to qualify' 
                                    })
                                }
                            }else{
                                res.status(404).json({
                                    status: 'error',
                                    error: `You need at least ${coupon.items_limit} in the cart`
                                })
                            }
                    }else if (coupon.discount_type === 'both'){

                        if (totalPrice > coupon.discount_limit){

                            let discountFixedPrice = totalPrice - coupon.discount;
                            let discountPercentageAmount = Math.floor(discountFixedPrice * (coupon.discount / 100));
                            let adjustedTotalPrice = discountFixedPrice - discountPercentageAmount;
                            let discount = coupon.discount + discountPercentageAmount

                            res.status(200).json({
                                cart,
                                totalPrice,
                                adjustedTotalPrice,
                                discount

                            });

                        }else{
                            res.status(404).json({
                                status: 'error',
                                error: 'total price is too low to qualify'
                            })
                        }
                    }else{
                        res.status(404).json({
                            status: 'error',
                            error: 'coupon doesn\'t exist '
                        })
                    }
                }else{
                    res.status(404).json({
                            status: 'error',
                            error: 'coupon has expired'
                    });
                }
            } else{
                res.status(404).json({
                    status: 'error',
                    error: 'coupon not found'
                });
            }
        }catch (error) {
            res.status(500).json({
                status: 'error',
                error: 'something unexpected happened',
                error
            });
        }
    }
}
module.exports = Coupons;