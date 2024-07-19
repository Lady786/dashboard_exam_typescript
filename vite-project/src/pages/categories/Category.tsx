import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryTable from './components/CategoryTable';
import CreateCategory from './components/CreateCategory';
import { fetchCategories } from './categorySlice';
import { AppDispatch, RootState } from '../../pages/reducer/store/store'; // Import Redux store tiplarini

// Category interfeysi (sizning actual ma'lumotlaringizga mos ravishda)
interface Category {
  id: string;
  name: string;
  // boshqa maydonlar
}

const Category: React.FC = () => {
  // Redux state'ni `RootState` orqali olish
  const categories = useSelector((state: RootState) => state.category.value);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <CreateCategory />
      <CategoryTable categories={categories} />
    </div>
  );
};

export default Category;
