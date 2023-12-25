const Product = require("./../model/productModel");

const productService = {
  async createProduct(productData: any): Promise<any> {
    try {
      const product = await Product.create(productData);
      return product;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  },
  async getAllProduct(): Promise<any> {
    return Product.find({});
  },
  async getProductById(id: string): Promise<any> {
    const product = await Product.findById(id);

    if (!product) {
      return null;
    }

    return product;
  },
  async updateProductById(id: string,productData: any): Promise<any> {
    
    const product = await Product.findByIdAndUpdate( id, productData )

    if (!product) {
      return null;
    }

    const updatedProduct=await Product.findById( id )
    return(updatedProduct)
  },
  async deleteProductById(id: string): Promise<any> {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return null;
    }

    return product;
  },
};

export default productService;
