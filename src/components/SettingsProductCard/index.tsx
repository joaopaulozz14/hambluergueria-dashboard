import { Dispatch, SetStateAction } from "react";
import { EditIcon, TrashIcon } from "../../assets/icons";
import { Product } from "../../types";
import * as Styled from "./styles";

interface product {
  product: Product;
  handleOpenModal: () => void;
  handleOpenDeleteModal: () => void;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}
const SettingsProductCard = ({
  product,
  handleOpenModal,
  handleOpenDeleteModal,
  setProduct,
}: product) => {
  return (
    <Styled.SettingsProductCardContainer>
      <img src={product.image} alt={product.description} />
      <h4>{product.name}</h4>

      <p>{product.price}</p>

      <div>
        <Styled.SettingsProductDeleteButton
          onClick={() => {
            setProduct(product);
            handleOpenDeleteModal();
          }}
        >
          <TrashIcon /> Remover Prato
        </Styled.SettingsProductDeleteButton>

        <Styled.SettingsProductEditButton
          onClick={() => {
            setProduct(product);
            handleOpenModal();
          }}
        >
          <EditIcon /> Editar Prato
        </Styled.SettingsProductEditButton>
      </div>
    </Styled.SettingsProductCardContainer>
  );
};

export default SettingsProductCard;
