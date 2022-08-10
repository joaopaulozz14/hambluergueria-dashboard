import * as Styled from "./styles";
import { Product } from "../../types/index";
import ProductCard from "../ProductCard";

interface ProductsListProps {
  list: Product[];
}

const ProductsList = ({ list }: ProductsListProps) => {
  return (
    <Styled.ProductsListContainer>
      {list.map((element) => (
        <ProductCard product={element} key={element.id} />
      ))}
    </Styled.ProductsListContainer>
  );
};

export default ProductsList;
