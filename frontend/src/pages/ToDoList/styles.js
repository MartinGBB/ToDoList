import styled from 'styled-components';

export const Container = styled.div`
  grid-column-start: 1; 
  grid-column-end: 5;
  grid-row: 2;

  display:grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);

  margin: auto;
  width: 60%;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  /* max-height: 98%; */

  /* min-height: 69.2vh; */
`;
