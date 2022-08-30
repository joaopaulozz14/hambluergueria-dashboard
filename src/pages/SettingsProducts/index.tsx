import { Dispatch, SetStateAction, useState } from "react";
import Menu from "../../components/Menu";
import { MarketIcon, InfoIcon, PromotionIcon } from "../../assets/icons";
import * as Styled from "./styles";
import SettingsProductCard from "../../components/SettingsProductCard/index";
import { mockedProducts } from "../../mocks";
import Button from "../../components/Button";
import { useProducts } from "../../contexts/products";
import ProductModal from "../../components/ProductModal";
import { Category, Product } from "../../types";
import DeleteProductModal from "../../components/DeleteProductModal";
import { useCategories } from "../../contexts/categories";
import SettingsMenu from "../../components/SettingsMenu";

//O router passa para a página e a página passa para o menu o setLogged;
const SettingsProducts = () => {
  const { products } = useProducts();
  const { categories } = useCategories();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0] || ({} as Category)
  );

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  return (
    <Styled.SettingsContainer>
      <Menu path="settings" />
        <SettingsMenu path={"users"}/>
      <Styled.EditEntitiesContainer>
        <h2>Gerenciar produtos</h2>
        <Styled.EditEntitiesCategoriesSelector>
          {categories.map((element) => {
            return(
              <Styled.EntitiesEditCategoriesButton active={element.name === selectedCategory.name} onClick={() => setSelectedCategory(element)}>
              {element.name}
            </Styled.EntitiesEditCategoriesButton>
            )
          })}
        </Styled.EditEntitiesCategoriesSelector>
        <Styled.EditEntitiesList>
          <Styled.EditEntityCard>
            <Styled.AddEditEntity onClick={handleOpenModal}>
              <h3>+</h3>
              <p>Adicionar item</p>
            </Styled.AddEditEntity>
          </Styled.EditEntityCard>
          {products.map((element) => (
            <SettingsProductCard
              handleOpenModal={handleOpenModal}
              handleOpenDeleteModal={handleOpenDeleteModal}
              setProduct={setProduct}
              product={element}
              key={element.id}
            />
          ))}
        </Styled.EditEntitiesList>
        <Styled.ConfirmationContainer>
          <Button text="Cancelar" variant="cancel" />
          <Button text="Salvar mudanças" />
        </Styled.ConfirmationContainer>
      </Styled.EditEntitiesContainer>
      {/*Quando o openModal for true, abre o ProductModal*/}
      {openModal && (
        <ProductModal
          product={product}
          handleOpenModal={handleOpenModal}
          setProduct={setProduct}
        />
      )}
      {openDeleteModal && (
        <DeleteProductModal
          productId={product?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
          setProduct={setProduct}
        />
      )}
    </Styled.SettingsContainer>
  );
};

export default SettingsProducts;
