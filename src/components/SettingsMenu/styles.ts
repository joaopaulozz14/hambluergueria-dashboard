import styled, { css } from "styled-components";

interface ActiveButtonProps {
  active?: boolean;
}

export const SettingsNavigationContainer = styled.div`
  ${({ theme }) => css`
    min-width: 20rem;
    height: 100vh;
    padding: 1.5rem;
    box-sizing: border-box;
    color: ${theme.colors.textColor};
    h1 {
      font-family: ${theme.constants.bodyFontFamily};
      font-size: ${theme.constants.headingFontSize};
      font-weight: 600;
      margin: 0.5rem 0 1.5rem 0;
    }
  `}
`;

export const SettingsNavigationButtonList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100% - 3rem);
    background-color: ${theme.colors.baseBg2};
    color: ${theme.colors.textColor};
    border-radius: 8px;
  `}
`;

export const SettingsNavigationButtonContainer = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 5.5rem;
    padding: 1.5rem 0;
    padding-left: 3rem;
    box-sizing: border-box;
    cursor: pointer;
    h2 {
      font-size: ${theme.constants.bodyFontSize};
    }
    p {
      font-size: ${theme.constants.bodyFontSize};
      color: ${theme.colors.textLight};
    }

    ${active &&
    css`
      background-color: ${theme.colors.primaryColorOpacity};
    `}
  `}
`;

export const SettingsNavigationButtonSelected = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 100%;
    position: relative;

    svg {
      position: absolute;
      left: -1.4rem;
      width: 0.833rem;
      height: 0.833rem;
    }

    ${active &&
    css`
      border-right: 2px solid ${theme.colors.primaryColor};
      box-sizing: border-box;
      svg {
        color: ${theme.colors.primaryColor};
      }
    `}
  `}
`;
