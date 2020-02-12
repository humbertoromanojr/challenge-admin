import React from 'react';

import { FaFilter, FaSortAmountUp } from 'react-icons/fa';

import {
  Container,
  Content,
  ContentHeader,
} from './styles';

export default function Tickets() {
  return (
    <Container>
      <Content>
        <ContentHeader>
          <h3>All tickets</h3>
          <div>
            <span>
              <FaSortAmountUp
                size={12}
                color="#ddd"
                style={{ marginRight: 10 }}
              />
              Sort
            </span>
            <span>
              <FaFilter
                size={10}
                color='#ddd'
                style={{ marginRight: 10 }}
              />
              Filter
            </span>
          </div>
        </ContentHeader>
      </Content>
    </Container>
  );
}
