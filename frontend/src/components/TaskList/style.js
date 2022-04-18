import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  width: 80;
`;

export const Table = styled.table`
  /* aling-itens: center;
  text-align: left;
  display: flex;
  display: block;
  /* margin: auto; */
  width: 80%;
  padding: 30px 1px;
  /* display: block; */
  /* justify-content: space-between; */
  text-align: left;
  flex-wrap: wrap;

  }

  & th {
  /* text-align: left; */
    /* font-size: 20px; */
    /* width: auto; */
    padding: 0px 1px;
    /* width: 200px; */
  }

  & td {
    /* width: 20px; */
    width: auto;
    /* width: 9px; */
    margin: 0;
    flex-wrap: wrap;
  justify-content: center;
    /* text-aling: left; */
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
