import { colors } from "./colors";
import { constants } from "./constants";

const theme = {
  colors,
  constants,
} as const;
//Do typescript que define que o objeto não pode ser alterado;
//Transformou o colors em readonly;
//É possível alterar somente neste arquivo;

export default theme;
