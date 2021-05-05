const router= require("express").Router()
const models=require('../models/products.js')
const controlers=require('../controllers/products.js')
const app = require("../../server/index.js")
router.post('/',models.createProduct)
router.get('/',models.getallproducts)
router.patch('/:id',controlers.UpdateProducts)
router.delete('/:id',models.deleteproduct)
router.post('/api/image',models.createImage)
router.get('/api/image',models.getImages)
router.delete('/api/image',models.deleteImages)
module.exports.router=router