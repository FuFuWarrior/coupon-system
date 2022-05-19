//     // send a request to get the cart from the db
// function checkCouponValidity(couponCode){
//     let discount;
//     if (couponCode === 'FIXED10'){
//         discount = 10
//         if ( totalCartItem > 1 ){
//             if( totalPrice > 50 ){
//                 let discountedTotalPrice = totalPrice - discount;
//                 return{
//                     shouldContinueToCheckout: true,
//                     cart: {
//                         ...cart,
//                         discount,
//                         totalPrice: discountedTotalPrice,
//                     }
//                 }
//             }       
//         }
//     }else if(couponCode === 'PERCENT10'){
//         if ( totalCartItem > 3 ){
//             if( totalPrice > 100 ){
//                 discount = 0.10;
//                 let discountAmount = totalPrice * discount;
//                 let discountedTotalPrice = totalPrice - discountAmount
//                 return{
//                     shouldContinueToCheckout: true,
//                     cart: {
//                         ...cart,
//                         discount,
//                         totalPrice: discountedTotalPrice,
//                     }
//                 }
//             }       
//         }
//     }else if (couponCode === 'MIXED10'){
//         let discountPercent;
//         let discountFixed = 10;
//         if (totalCartItem > 3) {
//             let percentDiscountAmount = totalPrice * discountPercent;
//             let percentDiscountedTotalPrice = totalPrice - percentDiscountAmount;
//             let fixedDiscountedTotalPrice = totalPrice - discountFixed;

//             if (percentDiscountedTotalPrice < fixedDiscountedTotalPrice) {
//                 return{
//                     cart: {
//                         ...cart,
//                         totalPrice
//                     }
//                 }
//             }

//             return {
//                 cart : {
//                     ...cart,
//                     discountFixed,
//                     fixedDiscountTotalPrice, 
//                 }
//             }
//         }
//     }else if (couponCode === 'REJECTED10'){
//         let discountPercent;
//         if (totalPrice > 1000){
//             let discountedTotalPrice = totalPrice - 10;
//             let discountAmount = discountedTotalPrice * 0.10;
//             discountedTotalPrice = discountAmount - discountedTotalPrice;

//             return {
//                 cart: {
//                     ...cart,
//                     dis
//                 }
//             }
//         }
//     }
// }

function checkCouponValidity(){
    
}