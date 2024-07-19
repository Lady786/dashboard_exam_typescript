import { Button, Modal } from 'antd';
import { useState } from 'react';
import ProductForm from './ProductForm';
import { createProduct } from '../../../api';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../productSlice';

// Mahsulot interfeysi (o‘zgartirilgan malumotlar asosida)
interface Product {
  name: string;
  image: string;
  // Boshqa kerakli maydonlarni qo‘shing
}

const CreateProduct: React.FC = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onCreate = async (productForm: Product) => {
    try {
      const response = await createProduct(productForm);
      if (response) {
        alert("Success");
        dispatch(fetchProducts());
      }
    } catch (error) {
      console.error('Error creating product:', error);
    } finally {
      handleOk();
    }
  };

  return (
    <div>
      <Button onClick={showModal} type="primary">Create</Button>
      <Modal
        title="Create Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <ProductForm onSubmit={onCreate} />
      </Modal>
    </div>
  );
};

export default CreateProduct;
