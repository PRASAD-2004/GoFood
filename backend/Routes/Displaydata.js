const express = require('express')
const router = express.Router()


router.post('/fooddata',
    async (req,res)=>{

    try{
        console.log(global.fooditems)
        console.log(global.foodcollections)
        res.send({
            fooditems:global.fooditems,
            foodcollections:global.foodcollections
            })

    }catch(error){
        res.send("server error")
    }
})

module.exports = router