    // send a request to get the cart from the db
function checkCouponValidity(couponCode){
    let discount;
    if (couponCode === 'FIXED10'){
        discount = 50
        if ( totalCartItem > 1 ){
            if( totalPrice > discount ){
                let discountedAmount = totalPrice - discount;
                return{
                    shouldContinueToCheckout: true,
                    cart: {
                        ...cart,
                        discount,
                        totalPrice,
                    }
                }
            }       
        }
    }else if(couponCode === 'PERCENT10'){
        if ( totalCartItem > 1 ){
            if( totalPrice > discount ){
                discount = 0.10;
                let discountedAmount = totalPrice * discount;
                return{
                    shouldContinueToCheckout: true,
                    cart: {
                        ...cart,
                        discount,
                        totalPrice,
                    }
                }
            }       
        }
    }else if (couponCode === 'MIXED10'){

    }else if (couponCode === 'REJECTED10'){
        
    }
}