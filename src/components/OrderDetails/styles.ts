import styled, { css } from "styled-components";

export const OrderDetailsContainer = styled.aside`
  ${({ theme }) => css`
    width: 25.875rem;
    height: 100vh;
    background-color: ${theme.colors.baseBg2};
    border-radius: 16px 0 0 16px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    box-sizing: border-box;
  `}
`;

export const OrderDetailsHeader = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 5.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 1.2rem;

    h2 {
      font-family: ${theme.constants.bodyFontFamily};
      line-height: ${theme.constants.lineHeight};
      font-size: ${theme.constants.headingFontSize};
      letter-spacing: 140%;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5rem;
    }
  `};
`;

export const CheckoutDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CheckoutDetailsHeader = styled.header`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 3rem;
    margin-bottom: 0.8rem;
    font-family: ${theme.constants.bodyFontFamily};
    font-weight: ${theme.constants.bodyFontSize};
    border-bottom: 1px solid ${theme.colors.baseLine};
    box-sizing: border-box;
    div {
      display: flex;
      justify-content: space-between;
      width: 7rem;
    }
  `}
`;

export const OrderDetailsFooter = styled.footer`
  ${({ theme }) => css`
    width: 22.875rem;
    height: 14.875rem;
    font-family: ${theme.constants.bodyFontFamily};
    font-weight: ${theme.constants.bodyFontSize};
    border-top: 1px solid ${theme.colors.baseLine};
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    div {
      margin: 1rem 0;
    }
    div:nth-child(1) {
      display: flex;
      justify-content: space-between;
    }
    div:nth-child(2) {
      display: flex;
      justify-content: space-between;
    }
    div:nth-child(3) {
      margin-bottom: 2rem;
    }
  `}
`;
export const CheckoutCardContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;
