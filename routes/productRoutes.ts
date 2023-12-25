import express, { Router } from 'express';
import productController from '../controllers/productController';

const router: Router = express.Router();

router.post('/create', productController.createProduct);
router.get('/getAll', productController.getAllProduct);
router.get('/getById/:id',productController.getProductById);
router.put('/updateById/:id',productController.updateProductById);
router.delete('/deleteById/:id',productController.deleteProductById);

export default router;
