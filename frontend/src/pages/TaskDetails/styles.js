import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 60%;
  height: 40%;
  /* background-color: var(--third-bg-color); */
  background-color: black;
  border-radius: 10px;
  margin-top: 1.2rem;
  position: fixed;
  top: 30vh;
  left: 20vw;

  & h1 {
   margin: 0.3em; 
  }

  & input {
    padding: 0 0.5em;
    width: 19em;
  }

  select {
    width: 20em;
  }

  & input, select {
    height: 2em;
    border-radius: 5px;
    display: block;
    margin: 0.7em auto;
  }
`;

export const Button = styled.button `
  cursor: pointer;
  width: 9em;
  margin: auto 1em;
  height: 2em;
`;


export const ReturnBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 1px;
  right: 5px;
`;