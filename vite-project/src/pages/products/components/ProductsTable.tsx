import { Table } from 'antd';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';

// Product interfeysini import qilish
interface Product {
  _id: string;
  image: string;
  title: string;
  subtitle: string;
  price: number;
}

// Column tiplari
const columns = [
  {
    title: 'Image',
    dataIndex: 'image',
    render: (imgUrl: string) => {
      return <img width={100} src={imgUrl} alt={imgUrl} />;
    },
  },
  {
    title: 'Name',
    dataIndex: 'title',
  },
  {
    title: 'Subtitle',
    dataIndex: 'subtitle',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Edit',
    dataIndex: 'edit',
    render: (_: any, record: Product) => {
      return <EditProduct productId={record._id} />;
    },
  },
  {
    title: 'Delete',
    dataIndex: 'delete',
    render: (_: any, record: Product) => {
      return <DeleteProduct productId={record._id} />;
    },
  },
];

// Props interfeysi
interface ProductsTableProps {
  products: Product[];
}

const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => {
  return (
    <div>
      <Table columns={columns} dataSource={products} size="middle" />
    </div>
  );
};

export default ProductsTable;
