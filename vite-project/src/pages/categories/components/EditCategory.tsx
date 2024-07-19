import { Button, Modal } from 'antd';
import { useState } from 'react';
import CategoryForm from './CategoryForm';
import { editCategory, getCategoryById } from '../../../api';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../categorySlice';

// Category interfeysi
interface Category {
  _id: string;
  name: string;
  image: string;
  __v?: number; // Agar kerak bo'lsa
}

// EditCategory komponentining props tipi
interface EditCategoryProps {
  categoryId: string;
}

const EditCategory: React.FC<EditCategoryProps> = ({ categoryId }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [singleCategory, setSingleCategory] = useState<Category | null>(null);

  const showModal = async () => {
    setIsModalOpen(true);
    try {
      const response = await getCategoryById(categoryId);
      setSingleCategory(response.data);
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEdit = async (categoryForm: Omit<Category, '_id' | '__v'>) => {
    try {
      const response = await editCategory(categoryForm, categoryId);
      if (response) {
        alert('Success');
        dispatch(fetchCategories());
      }
    } catch (error) {
      console.error('Error editing category:', error);
    } finally {
      handleOk();
    }
  };

  return (
    <div>
      <Button onClick={showModal} type="primary">Edit</Button>
      <Modal
        title="Edit Category"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {singleCategory ? (
          <CategoryForm onSubmit={handleEdit} initialValues={singleCategory} />
        ) : (
          'Loading...'
        )}
      </Modal>
    </div>
  );
};

export default EditCategory;
