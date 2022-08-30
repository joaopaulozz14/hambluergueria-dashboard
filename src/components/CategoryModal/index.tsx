import { ModalOverlay, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";

interface CategoryModalProsp {
  handleOpenModal: () => void;
}
const CategoryModal = ({ handleOpenModal }: CategoryModalProsp) => {
  return (
    <ModalOverlay>
      <h2>Criar nova categoria</h2>
      <StyledInput placeholder="Nome da categoria"/>
      <div>
        <Button text="Cancelar" variant="cancel" onClick={handleOpenModal} />
        <Button text="Enviar" />
      </div>
    </ModalOverlay>
  );
};

export default CategoryModal;
