import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  display: flex;
  width: 100%;
  background-color: var(--third-bg-color);
  border-radius: 10px;
  position: relative;
`;

export const Table = styled.table`
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
