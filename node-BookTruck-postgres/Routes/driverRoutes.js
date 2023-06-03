const express = require('express')
const router = express.Router()
const authController = require('../controllers/driverController')
const controller = require('../controllers/driverController')
const verify = require('../middleware/verifyJWT')


router.route('/')
    .get(productController.getAllProducts)
    .post(productController.createNewProduct)

router.route('/:id')
    .get(productController.getProductById)

    
router.route('/:id')

    .delete(productController.deleteprod)


    router.route('/:id')
    .put(productController.updateProd)





//router.route('/:id').delete(productController.delete)    

module.exports = router