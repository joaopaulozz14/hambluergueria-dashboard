import styled, { css } from "styled-components";

interface ActiveButtonProps {
  active?: boolean;
}
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

export const EditEntitiesCategoriesSelector = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 1px solid ${theme.colors.baseLine};
  `}
`;

export const EntitiesEditCategoriesButton = styled.button<ActiveButtonProps>`
  ${({ theme, active }) => css`
    background-color: ${theme.colors.baseBg2};
    font-size: 0.875rem;
    color: ${theme.colors.textColor};
    margin-left: 1.5rem;
    font-weight: 600;
    padding-bottom: 0.813rem;
    padding-top: 1rem;
    cursor: pointer;
    ${active &&
    css`
      border-bottom: 1px solid ${theme.colors.primaryColor};
      color: ${theme.colors.primaryColor};
    `}
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

export const EditEntityCard = styled.div`
  ${({ theme }) => css`
    width: 13.813rem;
    height: 18.688rem;
    border: 1px dashed ${theme.colors.primaryColor};
    border-radius: 8px;
    margin: 1rem 1rem 0 1rem;
  `}
`;

export const AddEditEntity = styled.div`
  ${({ theme }) => css`
    width: 13.75rem;
    height: 18.75rem;
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

export const ConfirmationContainer = styled.div`
  margin: 3rem 0.125rem 1.5rem 2.5rem;
  display: flex;
  gap: 0.5rem;
`;
