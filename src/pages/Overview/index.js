import React, { PureComponent } from 'react';
import ReactApexChart from 'react-apexcharts';
import Button from '@material-ui/core/Button';

import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/esm/locale';

import CardsTitleItems from '../../components/CardsTitleItems';
import HeaderTitle from '../../components/HeaderTitle';
import UnresolvedTicketsItems from '../../components/UnresolvedTicketsItems';
import CardsChart from '../../components/CardsChart';
import TasksItems from '../../components/TasksItems';
import Cards from '../../components/Cards';

import {
  Container,
  Content,
  ContainerCards,
  ContainerChart,
  ContainerCardsFooter,
  CreateNewTask
} from './styles';

class Overview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

      chart04: {
        options: {
          chart: {
            height: 500,
            type: 'area',
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [0, 4],
          },
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
            onItemClick: {
              toggleDataSeries: true
            },
            onItemHover: {
                highlightDataSeries: true
            },
          },
          labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
          xaxis: {
            type: 'text',
          },
          yaxis: [
            {
              opposite: true,
              title: {
                text: '',
              },
            },
          ],
        },
        series: [
          {
            name: 'Today',
            type: 'area',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 59, 12, 16, 34, 43, 7, 9, 8, 11, 23, 21, 23, 43, 12],
          },
          {
            name: 'Everyday',
            type: 'area',
            data: [12, 34, 43, 7, 9, 8, 11, 23, 21, 23, 43, 23, 42, 35, 27, 43, 22, 17, 31, 22, 49, 12, 16],
          },
        ],
      },
    };
  }

  render() {

    return (
      <Container>
        <Content>
          <ContainerCards>
            <Cards>
              <CardsTitleItems title="Unresolved" />
              60
            </Cards>

            <Cards>
              <CardsTitleItems title="overdue" />
              16
            </Cards>

            <Cards>
              <CardsTitleItems title="open" />
              43
            </Cards>

            <Cards>
              <CardsTitleItems title="on hold" />
              64
            </Cards>
          </ContainerCards>

          <ContainerChart>
            <div id="chart">
              <header>
                <h3>Today's trends</h3>
                <span>{formatDistance(new Date(2020, 2, 10), new Date(2020, 2, 9), {
                    locale: ptBR,
                  })}
                </span>
              </header>
              <ReactApexChart
                options={this.state.chart04.options}
                series={this.state.chart04.series}
                type="area"
                height={450}
                width={850}
              />
            </div>
            <article>
              <CardsChart title="Resolved" info="449" />
              <CardsChart title="Received" info="426" />
              <CardsChart title="Average first response time" info="33m" />
              <CardsChart title="Average response time" info="3h 8m" />
              <CardsChart title="Resolution within SLA" info="94%" />
            </article>
          </ContainerChart>

          <ContainerCardsFooter>
            <Cards size="big">
              <HeaderTitle title="Unresolved tickets" subtitle="group Support" link="overview" textLink="View details" />
              <UnresolvedTicketsItems title="Waiting on Feature Request" number="4238" />
              <UnresolvedTicketsItems title="Waiting Customer Request" number="1005" />
              <UnresolvedTicketsItems title="Waiting Developer Fix" number="914" />
              <UnresolvedTicketsItems title="Pending" number="281" />
            </Cards>
            <Cards size="big">
              <HeaderTitle title="Tasks" subtitle="Today" link="tickets" textLink="View all" />
              <CreateNewTask>
                <h3>Create new task</h3>
                <span>+</span>
              </CreateNewTask>
              <TasksItems title="Finish ticket update" typeButton="danger" textButton="URGENT" />
              <TasksItems title="Create new ticket example" typeButton="secondary" textButton="NEW" />
              <TasksItems title="Update ticket report" check="sim" typeButton="primary" textButton="DEFAULT" />
            </Cards>
          </ContainerCardsFooter>
        </Content>
      </Container>
    );
  }

}

export default Overview;
