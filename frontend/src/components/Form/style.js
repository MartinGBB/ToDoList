import styled from 'styled-components';

export const Content = styled.form`
  grid-column-start: 1;
  grid-column-end: 11;
  grid-row-start: 1;
  grid-row-end: 2;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);

  background-color: var(--color-box-add-task);
  border-bottom: 1px solid #1d5064e0;
  height: 50px;

  & input {
    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 6;
  
    padding: 10px;
    border: none;
  };

  & select {
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 6;

    border: none;
    background: snow;
    cursor: pointer;
    color: var(--font-color-primary);
  };

  & select:hover {
    color: black;
    transition:0s;
}
  
  & button {
    grid-column-start: 9;
    grid-column-end: 10;
    grid-row-start: 2;
    grid-row-end: 5;

    border: none;
    background: snow;
    color: var(--font-color-primary);
    cursor: pointer;
  };

  & button:active {
    position: relative;
    top: 1px;
    box-shadow: none;
}

  & img {
  pointer-events: none;
  color: red;
  width: 17px;
}
  
& input:focus, select:focus, button:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    }

`;

// referens: https://www.todoespacoonline.com/w/2014/05/efeito-3d-em-botoes-com-css/