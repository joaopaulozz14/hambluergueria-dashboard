import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface CardContainerProps {
  theme: Theme;
}
export const CardContainer = styled.div<CardContainerProps>`
  ${({ theme }) => css`
    width: 12rem;
    height: 14.125rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: ${theme.constants.bodyFontFamily};
    position: relative;
    text-align: center;
    justify-content: center;
    padding-top: 2rem;

    box-sizing: border-box;
    margin-top: 15px;

    img { 
        width: 8rem;
        height: 8rem;
        position: absolute;
        top: -3.5rem;
    }
  `}
`;
