import styled from 'styled-components';

export const Content = styled.form`
  background-color: var(--main-bg-color);
  border-bottom: 2px solid var(--secundary-bg-color);
  /* display: flex; */
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  padding: 24px 28px;

  & input {
    width: 25%;
    padding: 6px;
    border: 1px solid #bbb;
    border-radius: 3px;
    margin: 5px;
    box-shadow:0 2px 0 var(--secundary-bg-color);
  };

  & select {
    width: auto;
    padding: 5px;
    border: 1px solid #bbb;
    border-radius: 3px;
    background: snow;
    margin: 5px;
    box-shadow:0 2px 0 var(--secundary-bg-color);
  };
  
  & button {
    width: auto;
    padding: 5px;
    border: 1px solid #bbb;
    border-radius: 3px;
    background: snow;
    margin: 5px;
    cursor: pointer;
    box-shadow:0 2px 0 var(--secundary-bg-color);
  };

  & button:active {
  position: relative;
  top: 3px;
  box-shadow: none;
}
`;

// referens: https://www.todoespacoonline.com/w/2014/05/efeito-3d-em-botoes-com-css/