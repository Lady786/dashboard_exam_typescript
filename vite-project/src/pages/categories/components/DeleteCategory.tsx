import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../../../api';
import { fetchCategories } from '../categorySlice';

// DeleteCategory komponentining props tipi
interface DeleteCategoryProps {
  categoryId: string;
}

const DeleteCategory: React.FC<DeleteCategoryProps> = ({ categoryId }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const del = confirm("Ma'lumotlar o'chirilmoqda");
    if (del) {
      try {
        const response = await deleteCategory(categoryId);
        if (response) {
          alert("Mahsulot o'chirildi");
          dispatch(fetchCategories());
        }
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  return (
    <div>
      <Button onClick={handleDelete} type='primary'>
        Delete
      </Button>
    </div>
  );
};

export default DeleteCategory;
