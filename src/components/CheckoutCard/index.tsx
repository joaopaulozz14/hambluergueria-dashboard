import { Product } from "../../types";
import * as Styled from "./styles";
import { useState } from "react";
import toast from "react-hot-toast";
import { TrashIcon } from "../../assets/icons";
import { StyledInput } from "../../assets/styles/globalStyles";
interface CheckoutCardProps {
  product: Product;
}
const CheckoutCard = ({ product }: CheckoutCardProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [description, setDescription] = useState<string>("");
  return (
    <Styled.CheckoutCardContainer>
      <Styled.CheckoutCardHeader>
        <img src={product.image} alt={product.name} />
        <div>
          <h5 title={product.name}>{product.name}</h5>
          <p>R${product.price}</p>
        </div>
        {/*Existem vários eventos(onClick, onMouseOut), e quando ocorre o evento a função recebe por padrão o próprio evento*/}
        {/*O target.value sempre vem como string*/}
        <Styled.ProuctQuantityInput
          type="number"
          min="1"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        />
        <span>R$ {(product.price * quantity).toFixed(2)}</span>
      </Styled.CheckoutCardHeader>
      <Styled.CheckoutCardFooter>
        <StyledInput
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Styled.RemoveProductButton
          onClick={() => toast.error("Sessão em desenvolvimento")}
        >
          <TrashIcon />
        </Styled.RemoveProductButton>
      </Styled.CheckoutCardFooter>
    </Styled.CheckoutCardContainer>
  );
};

export default CheckoutCard;
