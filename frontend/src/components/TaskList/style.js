import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  width: 80%;
`;

export const Table = styled.table`
  width: 80%;
  padding: 30px 1px;
  /* text-align: left; */
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

  & button {
    width: auto;
    padding: 5px;
    border: 1px solid #bbb;
    border-radius: 3px;
    background: snow;
    cursor: pointer;
    box-shadow:0 2px 0 gray;
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
