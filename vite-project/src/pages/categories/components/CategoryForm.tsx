import { Button, Input, Form } from "antd";
import { useEffect } from "react";


interface CategoryFormValues {
  name: string;
  image: string;
}

interface CategoryFormProps {
  onSubmit: (values: CategoryFormValues) => void;
  initialValues?: CategoryFormValues;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ onSubmit, initialValues }) => {
  const [form] = Form.useForm<CategoryFormValues>();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        onSubmit(values);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please input the category name!' }]}
      >
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item
        name="image"
        label="Image"
        rules={[{ required: true, message: 'Please input the image URL!' }]}
      >
        <Input placeholder="Image" />
      </Form.Item>
      <Form.Item>
        <Button onClick={handleSubmit} type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default CategoryForm;
