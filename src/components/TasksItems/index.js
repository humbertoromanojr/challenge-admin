import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Button from '@material-ui/core/Button';

import { Container, TitleText } from './styles';

const TasksItems = props => (
  <Container>
    <div>
      <FaCheckCircle
        size={20}
        color='#3751FF'
      />
      <TitleText>{props.title}</TitleText>
    </div>
    <Button variant="contained" color={props.typeButton}>{props.textButton}</Button>
  </Container>
);

export default TasksItems;
