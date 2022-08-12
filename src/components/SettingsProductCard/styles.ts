import styled, {css} from "styled-components";

export const SettingsProductCardContainer = styled.div`
   ${({ theme }) => css`
    width: 13.813rem;
    height: 18.688rem;
    border: 1px dashed ${theme.colors.primaryColor};
    border-radius: 8px;
    margin: 1rem;
  `}
`;
