import styled from "styled-components";

export const ProductsListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  height: 40rem;
  box-sizing: border-box;
  overflow-y:scroll;
  
  ::-webkit-scrollbar {
    display: none;
  }
`;
