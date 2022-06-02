import styled from 'styled-components';

export const Container = styled.form`
  grid-column-start: 1; 
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;  
  background-color: var(--secundary-bg-color);
  border-radius: 20px 20px 0 0;
  height: 4rem;
  justify-content: center;
  display: flex;
  color: white;
  font-family: 'Grape Nuts', cursive;
  position: relative;
  bottom: 0rem;

  & h1 {
    margin: auto;
  }
  `;