import styled, { css } from "styled-components";

export const CheckoutCardContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 6.625rem;
    display: flex;
    flex-direction: column;
  `}
`;

export const CheckoutCardHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 3rem;
    display: flex;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
    div {
      height: 100%;
      width: calc(100% - 6.125rem);
      line-height: 100%;
    }
    h5 {
      height: 1.125rem;
      width: 8.75rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    span {
      min-width: 3.5rem;
      padding-left: 1.25rem;
      height: 100%;
      display: flex;
      align-items: center;
    }
  `}
`;

export const ProuctQuantityInput = styled.input`
  ${({ theme }) => css`
    //Para remover as bordas quando o input é selecionado
    all: unset;
    width: 3rem;
    height: 3rem;
    background-color: ${theme.colors.baseBg1};
    border: 1px solid ${theme.colors.baseLine};
    color: ${theme.colors.textColor};
    border-radius: 8px;
    text-align: center;
  `}
`;

export const CheckoutCardFooter = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
`;

export const RemoveProductButton = styled.button`
  ${({ theme }) => css`
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
    text-align: center;
    background-color: ${theme.colors.baseBg2};
    border: 1px solid ${theme.colors.secondaryColor};
    color: ${theme.colors.secondaryColor};
    cursor: pointer;
  `}
`;
