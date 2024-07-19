import { Button, Input, Form } from 'antd';
import { useEffect } from 'react';


interface Product {
  title: string;
  subtitle: string;
  description: string;
  size: number;
  price: number;
  image: string;
  color: string;
  rate: number;
}

interface ProductFormProps {
  onSubmit: (values: Product) => void;
  initialValues?: Product;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, initialValues }) => {
  const [form] = Form.useForm();

  
  useEffect(() => {
      if (initialValues) {
          form.setFieldsValue(initialValues);
        }
    }, [initialValues, form]);
    const handleSubmit = () => {
      form
        .validateFields()
        .then((values) => {
          onSubmit(values as Product); 
        })
        .catch((info) => {
          console.log('Validate Failed:', info);
        });
    };

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: 'Please input the title!' }]}
      >
        <Input placeholder="Title" />
      </Form.Item>

      <Form.Item
        name="subtitle"
        label="Subtitle"
        rules={[{ required: true, message: 'Please input the subtitle!' }]}
      >
        <Input placeholder="Subtitle" />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: 'Please input the description!' }]}
      >
        <Input placeholder="Description" />
      </Form.Item>

      <Form.Item
        name="size"
        label="Size"
        rules={[{ required: true, message: 'Please input the size!' }]}
      >
        <Input placeholder="Size" type="number" />
      </Form.Item>

      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, message: 'Please input the price!' }]}
      >
        <Input placeholder="Price" type="number" />
      </Form.Item>

      <Form.Item
        name="image"
        label="Image"
        rules={[{ required: true, message: 'Please input the image URL!' }]}
      >
        <Input placeholder="Image" />
      </Form.Item>

      <Form.Item
        name="color"
        label="Color"
        rules={[{ required: true, message: 'Please input the color!' }]}
      >
        <Input placeholder="Color" />
      </Form.Item>

      <Form.Item
        name="rate"
        label="Rate"
        rules={[{ required: true, message: 'Please input the rate!' }]}
      >
        <Input placeholder="Rate" type="number" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
