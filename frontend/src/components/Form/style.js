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
  /* min-height: 55px; */
  height: 50px;

  & input {
    min-width: 25%;
    padding: 10px;
    border: none;
    margin: 5px;
  };

  & select {
    width: auto;
    padding: 5px;
    border: 1px solid #bbb;
    border-radius: 3px;
    background: snow;
    margin: 5px;
    box-shadow:0 2px 0 #1d5064e0;
  };
  
  & button {
    width: auto;
    padding: 5px;
    border: 1px solid #bbb;
    border-radius: 3px;
    background: snow;
    margin: 5px;
    cursor: pointer;
    box-shadow:0 2px 0 #1d5064e0;
  };

  & button:active {
  position: relative;
  top: 3px;
  box-shadow: none;
}
`;

// referens: https://www.todoespacoonline.com/w/2014/05/efeito-3d-em-botoes-com-css/