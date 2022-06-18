import styled from 'styled-components';

export const Content = styled.form`
  grid-column-start: 1; 
  grid-column-end: 11;
  grid-row-start: 1; 
  grid-row-end: 2;

  /* background-color: #1d5064e0; */
  background-color: #FFFF;
  border-bottom: 1px solid #1d5064e0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  & input {
    min-width: 25%;
    padding: 10px;
    border: none;
    margin: 5px;
  };

  & select {
    width: auto;
    height: 3.4em;
    margin: 5px;
    border: none;
    background: snow;
    cursor: pointer;
    color: gray;
  };

  & select:hover {
    color: black;
    transition:0s;
}
  
  & button {
    padding: 5px;
    border: none;
    background: snow;
    color: gray;
    margin: 5px;
    cursor: pointer;
  };

  & button:active {
    position: relative;
    top: 3px;
    box-shadow: none;
}

  & input:focus, select:focus, button:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    }
`;

// referens: https://www.todoespacoonline.com/w/2014/05/efeito-3d-em-botoes-com-css/