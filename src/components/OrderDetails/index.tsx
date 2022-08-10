import toast from "react-hot-toast";
import Button from "../Button/index";
import CheckoutCard from "../CheckoutCard";
import * as Styled from "./styles";
import { mockedProducts } from "../../mocks";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <Styled.OrderDetailsHeader>
        <h2>Pedido 4343</h2>
        <div>
          <Button text="Comer no local" onClick={() => {}} size="small" />
          <Button
            text="P/ viagem"
            onClick={() => {}}
            size="small"
            variant="disabled"
          />
          <Button
            text="Delivery"
            onClick={() => {}}
            size="small"
            variant="disabled"
          />
        </div>
      </Styled.OrderDetailsHeader>
      <Styled.CheckoutDetailsContainer>
        <Styled.CheckoutDetailsHeader>
          <h3>Item</h3>
          <div>
            <h3>Qtd</h3>
            <h3>Preço</h3>
          </div>
        </Styled.CheckoutDetailsHeader>
        <Styled.CheckoutCardContainer>
          <CheckoutCard product={mockedProducts[0]} />
          <CheckoutCard product={mockedProducts[1]} />
        </Styled.CheckoutCardContainer>
      </Styled.CheckoutDetailsContainer>

      <Styled.OrderDetailsFooter>
        <div>
          <p>Desconto:</p>
          <p>R$0.00</p>
        </div>
        <div>
          <p>Sub total</p>
          <p>R$0.00</p>
        </div>
        <div>
          <p>Escolha a mesa primeiro</p>
        </div>
        <Button
          text="Continuar para pagamento"
          size="x-large"
          onClick={() => {
            toast.error("Sessão em desenvolvimento");
          }}
        />
      </Styled.OrderDetailsFooter>
    </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
