import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { useProducts } from "../../contexts/products";
import { api } from "../../service";
import { Product } from "../../types";
import Button from "../Button";
import * as Styled from "./styles";
interface DeleteProductProps {
  productId?: string;
  handleOpenDeleteModal: () => void;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}

const DeleteProductModal = ({
  productId,
  setProduct,
  handleOpenDeleteModal,
}: DeleteProductProps) => {
  const { handleGetProducts } = useProducts();

  const handleDeleteProduct = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/products/${productId}`, headers).then(() => {
      toast.success("Produto excluído com sucesso");
      handleGetProducts();
      handleOpenDeleteModal();
      setProduct(undefined);
    });
  };

  return (
    <ModalOverlay>
      <Styled.DeleteModalContainer>
        <h2>Excluir produto</h2>
        <div>
          <Button
            text="Cancelar"
            variant="cancel"
            onClick={() => {
              handleOpenDeleteModal();
              setProduct(undefined);
            }}
          />
          <Button text="Excluir" onClick={handleDeleteProduct} />
        </div>
      </Styled.DeleteModalContainer>
    </ModalOverlay>
  );
};
export default DeleteProductModal;
