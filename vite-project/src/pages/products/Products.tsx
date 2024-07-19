import { useEffect } from 'react';
import ProductsTable from './components/ProductsTable';
import CreateProduct from './components/CretaeProduct';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productSlice';
import { RootState } from '../reducer/store/store'; // Redux store'dan RootState import qilish

const Products: React.FC = () => {
  // Redux holatini olish
  const products = useSelector((state: RootState) => state.product.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div>
      <CreateProduct />
      <ProductsTable products={products} />
    </div>
  );
};

export default Products;
