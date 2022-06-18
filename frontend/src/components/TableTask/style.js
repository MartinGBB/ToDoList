import styled from 'styled-components';

export const Container = styled.div`
  grid-column-start: 1; 
  grid-column-end: 11;
  grid-row-start: 2; 
  grid-row-end: 11;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);

  margin: auto;
  /* display: flex; */
  background-color: var(--third-bg-color);
  border-radius: 10px;
  /* position: relative; */
width: 100%;
height: 100%;
overflow: auto;
`;

export const Table = styled.table`
  grid-column-start: 1; 
  grid-column-end: 11;
  grid-row-start: 1;
  grid-row-end: 11;
height: 100%;
overflow: hidden;
 filter: ${({ taskDetails }) => taskDetails ? 'blur(2px)' : 'blur(0)' };
  width: 80%;
  padding: 30px 1px;
  text-align: left;
  margin: auto;
  flex-wrap: wrap;

  & th {
    padding: 0px 1px;
  }

  & td {
    max-width: 100px;
    word-break: break-all;
    width: auto;
    margin: 0;
    flex-wrap: wrap;
    padding: 10px 5px;
  }

  & .icon-button {
    width: 1.5em;
  }

  & button {
    width: auto;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }

  & button:active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }

  @media(max-width: 800px) {
    font-size: 12px;
    width: 90%;
  }
  `;

export const Icon = styled.img`
  width: 2em;
  pointer-events: none;
`;
