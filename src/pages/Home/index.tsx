//import { StyledHeader } from "./styles";
import { SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { DateTime } from "luxon";
import ProductsList from "../../components/ProductsList";
import { mockedCategories } from "../../mocks";
import { useEffect, useState } from "react";
import { Category, Product } from "../../types";
import OrderDetails from "../../components/OrderDetails";
import { useProducts } from "../../contexts/products";
import { useCategories } from "../../contexts/categories";

const Home = () => {
  const { products } = useProducts();
  const { categories } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    //categories[0] || ({} as Category)
    categories[0]
  );

  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, [categories]);
  //O filter recebe uma função anônima que deve retornar um boolean;
  const filteredProducts: Product[] = products.filter(
    (element) => selectedCategory && element.categoryId === selectedCategory.id
  );

  const actualDate = DateTime.now();
  //console.log(actualDate)
  //No inspecionar é possível visualizar as propriedades que o luxon traz, a partir dela montar a data.

  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;
  return (
    <Styled.HomeContainer>
      <Menu path="home" />
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.TitleContainer>
            <h1>Burguer Fresh</h1>
            <p>{formatedDate}</p>
          </Styled.TitleContainer>
          <Styled.SearchInputContainer>
            <SearchIcon />
            <input placeholder="Procure pelo sabor" />
          </Styled.SearchInputContainer>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesNavigationBar>
            {categories.map((element) => {
              return (
                <Styled.CategoriesNavigationButton
                  //Poderia ser selecionado outros parâmetros em outras situações, porque está sendo passado a Category inteira no map.
                  active={
                    selectedCategory && element.name === selectedCategory.name
                  }
                  onClick={() => setSelectedCategory(element)}
                  key={element.id}
                >
                  {element.name}
                </Styled.CategoriesNavigationButton>
              );
            })}
          </Styled.CategoriesNavigationBar>
          <Styled.ProductsHeaderContainer>
            <h2>Escolha seu lanche</h2>
            <Styled.TableSelect>
              <option value="1">Selecione a mesa</option>
            </Styled.TableSelect>
          </Styled.ProductsHeaderContainer>
          <div>
            {/*O list está sendo requisitado na declaração do ProductsList*/}
            <ProductsList list={filteredProducts} />
          </div>
        </section>
      </Styled.HomeContentContainer>
      <OrderDetails />
    </Styled.HomeContainer>
  );
};

export default Home;
