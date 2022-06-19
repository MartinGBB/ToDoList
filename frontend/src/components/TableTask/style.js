import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 1 / 11; 
  grid-row: 2 / 11; 
  position: relative;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 5px;
  }

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);

  margin: auto;
  /* display: flex; */
  background-color: var(--secundary-bg-color);
  /* border-radius: 10px; */
  /* position: relative; */
  width: 100%;
  height: 100%;
  margin-top: 5px;
  overflow: auto;
  `;


export const Table = styled.table`
  grid-column: 2 / 11;
  grid-row-start: 1 / 11;

  filter: ${({ taskDetails }) => taskDetails ? 'blur(2px)' : 'blur(0)' };
  width: 100%;
  min-height: 100%;
  padding: 25px 1px;
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
    grid-column: 1 / 11;
    font-size: 12px;
    width: 90%;
  }
  `;

export const Icon = styled.img`
  width: 2em;
  pointer-events: none;
`;
