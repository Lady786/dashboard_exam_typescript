import { Button, Modal } from "antd";
import { useState } from "react";
import CategoryForm from "./CategoryForm";
import { createCategory } from "../../../api";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../categorySlice";

// CategoryForm uchun interfeys
interface CategoryFormValues {
  name: string;
  image: string;
}

const CreateCategory: React.FC = () => {
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

  const onCreate = async (categoryForm: CategoryFormValues) => {
    try {
      const response = await createCategory(categoryForm);
      if (response) {
        alert("Success");
        dispatch(fetchCategories());
      }
    } catch (error) {
      console.error('Error creating category:', error);
    } finally {
      handleOk();
    }
  };

  return (
    <div>
      <Button onClick={showModal} type="primary">
        Create
      </Button>
      <Modal
        title="Create Category"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <CategoryForm onSubmit={onCreate} />
      </Modal>
    </div>
  );
};

export default CreateCategory;
