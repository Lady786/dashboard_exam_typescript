import { Table } from 'antd';
import EditCategory from './EditCategory';
import DeleteCategory from './DeleteCategory';
import { ColumnsType } from 'antd/es/table';


interface Category {
  _id: string;
  name: string;
  image: string;
}


interface CategoryTableProps {
  categories: Category[];
}

const columns: ColumnsType<Category> = [
  {
    title: 'Image',
    dataIndex: 'image',
    render: (imgUrl: string) => {
      return <img width={100} src={imgUrl} alt={imgUrl} />;
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Edit',
    dataIndex: 'edit',
    render: (_, record: Category) => {
      return <EditCategory categoryId={record._id} />;
    },
  },
  {
    title: 'Delete',
    dataIndex: 'delete',
    render: (_, record: Category) => {
      return <DeleteCategory categoryId={record._id} />;
    },
  },
];

const CategoryTable: React.FC<CategoryTableProps> = ({ categories }) => {
  const dataSource = categories.map((category) => ({
    ...category,
    key: category._id, 
  }));

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} size="middle" />
    </div>
  );
};

export default CategoryTable;
