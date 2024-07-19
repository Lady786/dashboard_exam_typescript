import { Button } from 'antd';
import { deleteProduct } from '../../../api';
import { fetchProducts } from '../productSlice';
import { useDispatch } from 'react-redux';
import React from 'react';

// `productId` props uchun tipi
interface DeleteProductProps {
  productId: string;
}

const DeleteProduct: React.FC<DeleteProductProps> = ({ productId }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const del = confirm("Ma'lumotlar o'chirilmoqda");
    if (del) {
      try {
        const response = await deleteProduct(productId);
        if (response) {
          alert("Mahsulot o'chirildi");
          dispatch(fetchProducts());
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  return (
    <div>
      <Button onClick={handleDelete} type='primary'>Delete</Button>
    </div>
  );
};

export default DeleteProduct;
