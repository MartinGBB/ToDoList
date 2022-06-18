import styled from 'styled-components';

export const Content = styled.form`
  grid-column-start: 1;
  grid-column-end: 11;
  grid-row-start: 1;
  grid-row-end: 2;

  background-color: var(--color-box-add-task);
  border-bottom: 1px solid #1d5064e0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  & input {
    height: 40%;
    padding: 10px;
    min-width: 25%;
    border: none;
  };

  & select {
    height: 80%;
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
    height: 80%;
    margin-left: 15px;
    padding: 5px;
    border: none;
    background: snow;
    color: gray;
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