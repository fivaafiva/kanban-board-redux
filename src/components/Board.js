import React from 'react';
//import modules
import styled from 'styled-components'
//import components
import Tasks from "./Tasks";

const Board = () => {
  return (
    <Container>
      <Tasks />
    </Container>
  );
};

export default Board;

const Container = styled.div`
  margin-top: 16px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4px;
`