import styled from 'styled-components';

export const Content = styled.form`
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 28px;

  & input {
    width: 25%;
    padding: 6px;
    border: 1px solid #bbb;
    border-radius: 3px;
    margin: 5px;
    box-shadow:0 2px 0 gray;
  };

  & select {
    width: auto;
    padding: 5px;
    border: 1px solid #bbb;
    border-radius: 3px;
    background: snow;
    margin: 5px;
    box-shadow:0 2px 0 gray;
  };
  
  & button {
    width: auto;
    padding: 5px;
    border: 1px solid #bbb;
    border-radius: 3px;
    background: snow;
    margin: 5px;
    cursor: pointer;
    box-shadow:0 2px 0 gray;
  };

  & button:active {
  position: relative;
  top: 3px;
  box-shadow: none;
}
`;

// referens: https://www.todoespacoonline.com/w/2014/05/efeito-3d-em-botoes-com-css/