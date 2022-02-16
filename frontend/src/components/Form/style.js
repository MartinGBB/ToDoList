import styled from 'styled-components';

export const Content = styled.form`
  background-color: blue;
  display: flex;
  align-items: center;
  padding: 24px 28px;

  & input {
    width: 25%;
    padding: 6px;
    border: 1px solid #bbb;
    border-radius: 3px;
    margin: 5px;
  };

  & select {
    width: 25%;
    padding: 5px;
    border: 1px solid #bbb;
    border-radius: 3px;
  };
`
