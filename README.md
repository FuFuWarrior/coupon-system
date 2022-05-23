# This is a coupon system assessment for scello

## Getting Started

This is nodejs project powered by express and sequelize(postgres), so knowledge of javascript is required. If node is not installed download here.

Then follow the step below

1. Go to the your terminal or command prompt

2. Type ```npm install ``` in your terminal or command prompt. 

Doing the above will download all the needed package for the project


## How to use

### How to check the coupon

You need to be a user to be able to use this API.

| Verb | User Routes  | Actions |
| ---- | ------------ | --------- |
| POST | /api/v1/coupon| This will check apply the coupon to the items in the cart|


##### Request Body

    { 
        "code": string,
    }

##### Response Body

{
    cart: array,
    totalPrice: number,
    adjustedTotalPrice: number,
    discount: number
}

You can have access to the live API [Coupon system app]: https://coupon-scello.herokuapp.com/