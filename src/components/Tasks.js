import React from 'react';
//import modules
import styled from 'styled-components'
//import components
import TaskCard from "./TaskCard";

const Tasks = () => {
  return (
    <Container>
      <Status>
        Some status
      </Status>
      <TaskCard />
    </Container>
  );
};

export default Tasks;

const Container = styled.div`
  
`
const Status = styled.div`

`