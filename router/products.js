const express = require('express')
const router = express.Router()
const products = require('../models/Products')

router.get('/products',(req,res)=> res.send('Hello products !!!'));

//add product
router.put('/addproduct',async(req,res)=>{
    try {
        const productNew = new products({
            image: 'abc.jpg',
            keyword:[1,2,3,4,5],
            title:'đây là title',
            description:'vài dòng text',
            status:false,
            price:'200.000đ',
            quantity:100
        })
        await productNew.save()
        res.status(200).json({success:true, message:'Create product success!!!'})
    } catch (error) {
        return res.status(400).json({success:false, message:'Create fail'})
        console.log(error)
    }
})

module.exports = router