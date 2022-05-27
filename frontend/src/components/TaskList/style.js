import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--third-bg-color);
`;

export const Table = styled.table`
  width: 80%;
  padding: 30px 1px;
  text-align: left;
  margin: auto;

  & th {
    padding: 0px 1px;
  }

  & td {
    width: auto;
    margin: 0;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0;
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
`;
