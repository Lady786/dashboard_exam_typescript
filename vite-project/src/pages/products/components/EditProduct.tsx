import { Button, Modal } from 'antd';
import {useState} from 'react';
import ProductForm from './ProductForm';
import { editProduct, getProductId } from '../../../api';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../productSlice';

interface EditProductProps {
  productId: string;
}

const EditProduct: React.FC<EditProductProps> = ({ productId }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);

  const showModal = async () => {
    setIsModalOpen(true);
    try {
      const product = await getProductId(productId);
      setSingleProduct(product.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEdit = async (productForm: Product) => {
    const { _id, __v, ...productData } = productForm;
    try {
      const response = await editProduct(productData, productId);
      if (response) {
        alert('Success');
        dispatch(fetchProducts());
      }
    } catch (error) {
      console.error('Error editing product:', error);
    } finally {
      handleOk();
    }
  };

  return (
    <div>
      <Button onClick={showModal} type="primary">Edit</Button>
      <Modal
        title="Edit Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {singleProduct ? (
          <ProductForm onSubmit={handleEdit} initialValues={singleProduct} />
        ) : (
          'Loading...'
        )}
      </Modal>
    </div>
  );
};

export default EditProduct;
