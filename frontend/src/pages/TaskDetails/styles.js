import styled from 'styled-components';

export const Container = styled.div `
  max-width: 35%;
  min-width: 55%;
  margin: auto;
  background-color: #1d5064c9;
  border-radius: 10px;
  position: fixed;
  top: 35%;
  left: 20%;
  right: 20%;
  display: grid;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(10, 10%);


  h3 {
    color: white;
    margin: auto;
    padding: 10px;
    grid-column-start: 2;
    grid-column-end: 9;
    grid-row-start: 1;
  }

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
    margin: 10px 0 5px;
    grid-column-end: 10;
    height: 2.2em;
    border-radius: 5px;
    display: block;
  }
`;

export const ContainerBtn = styled.div `
  grid-column-start: 2;
  grid-column-end: 10;
  grid-row-start: 9;
  display: grid;
  margin: 10px;
  grid-template-columns: 40% 20% 40%;

 & button:first-child {
    grid-column-start: 1;
  }

  & button:last-child {
    grid-column-start: 3;
  }

  & button {
    cursor: pointer;
    height: 2em;
  }
`;

export const ReturnBtn = styled.button `
  cursor: pointer;
  width: auto;
  background-color: transparent;
  border: transparent; 
  padding: 0;
  position: absolute;
  top: 0px;
  right: 1px;

  & button:active {
    position: relative;
    top: 115px;
    box-shadow: none;
  }

  & img {
    margin: auto;
    width: 2.8em;
    background-size: cover;
  }
`;
