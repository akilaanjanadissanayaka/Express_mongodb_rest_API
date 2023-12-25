import { Request, Response } from "express";
import productService from "../services/productService";

const productController = {
  async createProduct(req: Request, res: Response): Promise<void> {
    try {
      //   const { id } = req.params;
      const product = await productService.createProduct(req.body);

      if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
      }

      res.status(200).json(product);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json({ message: error.message });
    }
  },

  async getAllProduct(req: Request, res: Response): Promise<void> {
    try {
      const product = await productService.getAllProduct();

      if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
      }

      res.status(200).json(product);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json({ message: error.message });
    }
  },

  async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const product = await productService.getProductById(id);

      if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
      }

      res.status(200).json(product);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json({ message: error.message });
    }
  },
  async updateProductById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      console.log("come to controller")
      const product = await productService.updateProductById(id,req.body);

      if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
      }

      res.status(200).json(product);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json({ message: error.message });
    }
  },

  async deleteProductById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const product = await productService.deleteProductById(id);

      if (!product) {
        res.status(404).json({ message: "product not found" });
        return
      }
      res.status(200).json({ message: "product delete successfully" });
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json({ message: error.message });
    }
  },

  // Implement other CRUD operations in a similar fashion...
};

export default productController;
