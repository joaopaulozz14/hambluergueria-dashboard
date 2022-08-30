import styled, { css } from "styled-components";

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: ${theme.colors.baseBg1};
  `}
`;

export const EditEntitiesContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    margin-top: 4.75rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    background-color: ${theme.colors.baseBg2};
    height: calc(100% - 6rem);
    margin-top: 5.575rem;
    border-radius: 8px;
    flex-direction: column;

    h2 {
      font-family: ${theme.constants.bodyFontFamily};
      font-size: 1.25rem;
      font-weight: 600;
      color: ${theme.colors.textColor};
      margin: 2.125rem 0 1.125rem 1.5rem;
    }
  `}
`;

export const EditEntitiesList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100% - 16.25rem);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1.5rem;
    box-sizing: border-box;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
    gap: 1.5rem;
  `}
`;
export const AddEditEntity = styled.div`
  ${({ theme }) => css`
    width: 6rem;
    height: 6rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primaryColor};
    cursor: pointer;
    p {
      font-weight: 600;
      font-family: ${theme.constants.bodyFontFamily};
      font-size: 16px;
      margin-top: 1.5rem;
    }
  `}
`;

export const EditCard = styled.div`
  ${({ theme }) => css`
    width: 6rem;
    height: 8rem;
    border-radius: 8px;
    border: 1px solid ${theme.colors.baseLine};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primaryColor};
    cursor: pointer;
    p {
      font-weight: 600;
      font-family: ${theme.constants.bodyFontFamily};
      font-size: 16px;
      margin-top: 1.5rem;
    }
    div{
      height: 100vh;
    }
  `}
`;

export const SettingsProductEditButton = styled.button`
  ${({ theme }) => css`
    height: 2.25rem;
    width: 6rem;
    background-color: ${theme.colors.primaryColorOpacity};
    color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  `}
`;

export const SettingsProductDeleteButton = styled.button`
  ${({ theme }) => css`
    height: 2.25rem;
    width: 6rem;
    background-color: ${theme.colors.baseBg2};
    color: ${theme.colors.secondaryColor};
    border: 1px solid ${theme.colors.secondaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  `}
`;

