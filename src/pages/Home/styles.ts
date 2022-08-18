import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";


interface CategoriesNavigationButtonProps {
  active?: boolean;
}

interface ButtonProps {
  theme: Theme;
}

export const HomeContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #252836;
  color: white;
  box-sizing: border-box;
 
  section {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    box-sizing: border-box;
  }
`;

export const HomeContentContainer = styled.div`
  width: calc(100% - 518px);
`;

export const HomeContentHeader = styled.header`
  width: 100%;
  height: 16vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
  //Não permite que o padding sobreponha o aside
`;

export const TitleContainer = styled.div`
  h1 {
    font-family: "Big Shoulders Inline Display";
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  p {
    text-transform: capitalize;
    //Coloca a primeira letra como maiúscula
    //Isso é feito no CSS por conta da acessibilidade para as pessoas que utilizam o leitor
    font-size: 20px;
  }
`;

export const SearchInputContainer = styled.div`
  width: 150px;
  height: 48px;
  background-color: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0.2rem 1rem;
  gap: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
  input {
    width: 114px;
    height: 20px;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #abbbc2;
    background-color: #2d303e;

    //Para remover as bordar quando clicado;
    :focus {
      outline: none;
    }
  }
`;

export const CategoriesNavigationBar = styled.div`
  width: 100%;
  height: 3vh;
  border-bottom: 1px solid #393c49;
  display: flex;
`;

export const CategoriesNavigationButton = styled.button<CategoriesNavigationButtonProps>`
  color: #393c49;
  border: 0;
  cursor: pointer;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-right: 0.4rem;
  background: #252836;

  :hover {
    color: white;
  }
  //Ao lado da props sempre é possível utilizar o theme;
  ${({ active }) =>
    active &&
    css`
      color: #6cea69;
      border-bottom: 2px solid #6cea69;
    `}
`;

export const ProductsHeaderContainer = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const TableSelect = styled.select`
  width: 165px;
  height: 48px;
  background: #e26b6b;
  border: 1px solid #393c49;
  border-radius: 8px;
  padding: 0 1rem;
  color: white;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

