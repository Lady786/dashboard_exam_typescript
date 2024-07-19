import axios from 'axios';
import { useEffect, useState } from 'react';


interface Product {
  id: string;
  title: string;
  price: number;
  subtitle: string;
  image: string;
  description: string;
  rate: number;
  color: string;
  size: string;
}

const useGetProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get<Product[]>("https://ecommerce-backend-fawn-eight.vercel.app/api/products");
        if (response.data) {
          setProducts(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []); 

  return products;
};

export default useGetProduct;
