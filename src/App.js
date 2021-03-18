import React from 'react'
//import modules
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
//import components
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <MainContainer>
      <Header />
      <Board />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled(Container)`
  display: grid;
  grid-template-rows: 15vh 85vh;
`