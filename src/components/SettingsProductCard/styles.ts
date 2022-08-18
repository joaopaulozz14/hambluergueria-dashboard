import styled, { css } from "styled-components";

export const SettingsProductCardContainer = styled.div`
  ${({ theme }) => css`
    width: 13.813rem;
    height: 18.688rem;
    border: 1px dashed ${theme.colors.primaryColor};
    border-radius: 8px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.textColor};
    img {
      width: 8.25rem;
      height: 8.25rem;


    }
    h3{
      display: flex;
      box-sizing: border-box;
    }
    p {
      color: ${theme.colors.textLight};
    }
  `}
`;

export const SettingsProductCardButton = styled.button`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 100%;
    border-radius: 0px 0px 8px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primaryColorOpacity};
    color: ${theme.colors.primaryColor};
    cursor: pointer;
    gap: 0.5rem;
  `}
`;
