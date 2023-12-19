const express = require('express');
const Stripe = require ('stripe');
const stripe = Stripe('sk_test_51OKMreBk4u6Ymp7ZbxjLV3d5yLmRZqFI4U85hHR7SqZiYN75DFb2YxQVl6O5jm9nlk11GXAuSD4JPeUoaJnXPol900Pstq1MW3')

const routerPayment= express.Router()

routerPayment.post('/create-checkout-session', async(req,res)=>{
    console.log(req.body)
    const line_items=req.body.basket.map(item=>{//{"state":[{product:{info produit,qt:3},}]}
        return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.pro.name,
                        images : [item.pro.image],

                        description: item.pro.description,
                        metadata:{
                            id:item.pro._id
                        }
                    },
                    unit_amount: item.pro.price*100,
                },
                quantity: item.quantity,
            }
//4242424242424242
    })
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });
    res.send({url:session.url });
})
module.exports= routerPayment