import { Dispatch, SetStateAction } from "react";
import Menu from "../../components/Menu";
import { MarketIcon, InfoIcon, PromotionIcon } from "../../assets/icons";
import * as Styled from "./styles";
import SettingsProductCard from "../../components/SettingsProductCard/index"
interface SettingsProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}
//O router passa para a página e a página passa para o menu o setLogged;
const Settings = ({ setLogged }: SettingsProps) => {
  return (
    <Styled.SettingsContainer>
      <Menu path="settings" setLogged={setLogged} />
      <Styled.SettingsNavigationContainer>
        <h1>Configurações</h1>
        <Styled.SettingsNavigationButtonList>
          <Styled.SettingsNavigationButtonContainer>
            <Styled.SettingsNavigationButtonSelected>
              <MarketIcon />
              <h2>Customize suas mesas</h2>
              <p>Adicione mesas, configure nomes</p>
            </Styled.SettingsNavigationButtonSelected>
          </Styled.SettingsNavigationButtonContainer>
          <Styled.SettingsNavigationButtonContainer active>
            <Styled.SettingsNavigationButtonSelected active>
              <PromotionIcon />
              <h2>Gerenciar produtos</h2>
              <p>Edite os pratos, preços e etc.</p>
            </Styled.SettingsNavigationButtonSelected>
          </Styled.SettingsNavigationButtonContainer>
          <Styled.SettingsNavigationButtonContainer>
            <Styled.SettingsNavigationButtonSelected>
              <PromotionIcon />
              <h2>Gerenciar as categorias</h2>
              <p>Adicione e edite as categorias</p>
            </Styled.SettingsNavigationButtonSelected>
          </Styled.SettingsNavigationButtonContainer>
          <Styled.SettingsNavigationButtonContainer>
            <Styled.SettingsNavigationButtonSelected>
              <InfoIcon />
              <h2>Gerenciar usuários</h2>
              <p>Adicione e edite os usuários</p>
            </Styled.SettingsNavigationButtonSelected>
          </Styled.SettingsNavigationButtonContainer>
        </Styled.SettingsNavigationButtonList>
      </Styled.SettingsNavigationContainer>

      <Styled.EditEntitiesContainer>
        <h2>Gerenciar produtos</h2>
        <Styled.EditEntitiesCategoriesSelector>
          <Styled.EntitiesEditCategoriesButton active>
            Lanches
          </Styled.EntitiesEditCategoriesButton>
          <Styled.EntitiesEditCategoriesButton>
            Porções
          </Styled.EntitiesEditCategoriesButton>
          <Styled.EntitiesEditCategoriesButton>
            Bebidas
          </Styled.EntitiesEditCategoriesButton>
        </Styled.EditEntitiesCategoriesSelector>
        <Styled.EditEntitiesList>
          <Styled.EditEntityCard>
            <Styled.AddEditEntity>
              <h3>+</h3>
              <p>Adicionar item</p>
            </Styled.AddEditEntity>
          </Styled.EditEntityCard>
          <SettingsProductCard />
        </Styled.EditEntitiesList>
      </Styled.EditEntitiesContainer>
    </Styled.SettingsContainer>
  );
};

export default Settings;
