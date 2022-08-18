import { EditIcon } from "../../assets/icons";
import { Product } from "../../types";
import * as Styled from "./styles";

interface product {
  product: Product;
}
const SettingsProductCard = ({ product }: product) => {
  return (
    <Styled.SettingsProductCardContainer>
      <img src={product.image} alt={product.description} />
      <h4>{product.name}</h4>
      <div>
        <p>{product.price}</p>
      </div>
      
      <Styled.SettingsProductCardButton>
      <EditIcon /> Editar Prato
      </Styled.SettingsProductCardButton>
    </Styled.SettingsProductCardContainer>
  );
};

export default SettingsProductCard;
