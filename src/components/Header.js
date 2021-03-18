import React from 'react';
//import modules
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const Header = () => {
  return (
    <Container>
     <Name>Kanban board</Name>
      <NewTaskBtn variant="contained" color="primary">
        Add Task
      </NewTaskBtn>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Name = styled.h1`
  //padding-bottom: 30px;
  flex: 1
`
const NewTaskBtn = styled(Button)`
  width: 210px;
  
`