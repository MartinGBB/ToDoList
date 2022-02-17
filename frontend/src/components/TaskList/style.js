import styled from 'styled-components';

export const Table = styled.table`
  text-align: left;
  display: flex;
  display: block;
  margin: 5px 20px;
  whidth: 100%;
  padding: 15px 1px;
  }

  & th {
  text-align: left;
    font-size: 20px;
    padding: 15px 5px;
    whidth: 200px;
  }

  & td {
    width: 300px;
    text-aling: left;
    padding: 10px;
  }

  & button {
    width: auto;
    padding: 5px;
    border: 1px solid #bbb;
    border-radius: 3px;
    background: snow;
    cursor: pointer;
    box-shadow:0 2px 0 gray;
  };

  & button:active {
  position: relative;
  top: 3px;
  box-shadow: none;
}
`;
