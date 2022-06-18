import styled from 'styled-components';

export const Container = styled.form`
  grid-column-start: 1; 
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  color: white;
  font-family: 'Grape Nuts', cursive;

  & h1 {
    margin: auto;
    font-size: 2rem;
  }
  `;