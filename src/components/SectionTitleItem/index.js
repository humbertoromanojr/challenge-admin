import React from 'react';

import { Container, TitleText } from './styles';

const SectionTitleItem = props => (
  <Container>

    <TitleText>{props.title}</TitleText>
  </Container>
);

export default SectionTitleItem;
