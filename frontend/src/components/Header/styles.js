import styled from 'styled-components';

export const Container = styled.form`
  grid-column-start: 1; 
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: var(--secundary-bg-color);
  border-bottom: 2px solid var(--main-bg-color);
  border-radius: 0px 0 20px 20px;
  height: 4rem;
  justify-content: center;
  display: flex;
  color: white;
  font-family: 'Grape Nuts', cursive;

  & h1 {
    margin: auto;
  }
  `;