import { useState } from "react";
import { EditIcon, TrashIcon } from "../../assets/icons";
import CategoryModal from "../../components/CategoryModal";
import Menu from "../../components/Menu";
import SettingsMenu from "../../components/SettingsMenu";
import { useCategories } from "../../contexts/categories";
import * as Styled from "./styles";

const SettingsCategories = () => {
  const { categories } = useCategories();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <Styled.SettingsContainer>
      <Menu path={"settings"} />
      <SettingsMenu path={"categories"} />
      <Styled.EditEntitiesContainer>
        <h2>Gerenciar categorias</h2>
        <Styled.EditEntitiesList>
          <Styled.AddEditEntity onClick={handleOpenModal}>
            <h3>+</h3>
            <p>Adicionar categoria</p>
          </Styled.AddEditEntity>
          {categories.map((element) => {
            return (
              <Styled.EditCard key={element.name}>
                {element.name}
                <div>
                  <Styled.SettingsProductEditButton>
                    <EditIcon />
                    Editar
                  </Styled.SettingsProductEditButton>
                  <Styled.SettingsProductDeleteButton>
                    <TrashIcon />
                    Remover
                  </Styled.SettingsProductDeleteButton>
                </div>
              </Styled.EditCard>
            );
          })}
        </Styled.EditEntitiesList>
      </Styled.EditEntitiesContainer>
      {openModal && <CategoryModal handleOpenModal={handleOpenModal} />}
    </Styled.SettingsContainer>
  );
};

export default SettingsCategories;
