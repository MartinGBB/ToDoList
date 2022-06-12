import styled from 'styled-components';

export const Container = styled.div `
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

  display: grid;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(10, 10%);

  & input {
    padding: 0 0.5em;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  & .selectCategory {
    grid-row-start: 5;
  }

  & .selectStatus {
    grid-row-start: 7;
  }

  & input, select {
    grid-column-start: 2;
    grid-column-end: 10;
    height: 2.3em;
    border-radius: 5px;
    display: block;
  }


`;

export const ContainerBtn = styled.div `
    grid-column-start: 2;
    grid-column-end: 10;
    grid-row-start: 9;
  display: grid;
  grid-template-columns: 40% 20% 40%;
  /* grid-template-rows: 100%; */

 & button:first-child {
    grid-column-start: 1;
  }

  & button:last-child {
    grid-column-start: 3;
  }
`;

export const Button = styled.button `
  /* grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 9; */
  cursor: pointer;
  /* margin: auto; */
  /* width: 9em; */
  /* margin: auto 1em; */
  height: 2em;
`;


export const ReturnBtn = styled.button `
  cursor: pointer;
  position: absolute;
  top: 1px;
  right: 5px;
`;