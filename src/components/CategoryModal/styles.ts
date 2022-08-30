import styled, { css } from "styled-components";

export const ModalContainer = styled.div`
  ${({ theme }) => css`
  background-color: ${theme.colors.baseBg2};
    width: 22rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: ${theme.colors.textColor};
    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  `}
`;
