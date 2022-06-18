import styled from 'styled-components';

export const Container = styled.form`
  grid-column-start: 1; 
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  color: white;
  margin-top: 15px;

  & h1 {
    margin: auto;
    font-family: var(--font-primary);
    font-size: var(--font-size-primary);
  }
  `;