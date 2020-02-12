import React from 'react';
import { Link } from "react-router-dom";

//assets
import Overview from '../../assets/images/overview.svg';
import Tickets from '../../assets/images/tickets.svg';
import Ideas from '../../assets/images/ideas.svg';
import Contacts from '../../assets/images/contacts.svg';
import Agents from '../../assets/images/agents.svg';
import Settings from '../../assets/images/settings.svg';
import Articles from '../../assets/images/articles.svg';
import Subscription from '../../assets/images/subscription.svg';

//Styles
import { Container, Nav } from "./styles";

export default function Sidebar() {
  return (
    <Container>

      <div>
        <Nav>
          <li>
            <Link to="/overview">Admin</Link>
          </li>
        </Nav>

        <Nav>
          <li>
            <Link to="/overview"><img src={Overview} alt="Overview" />Overview</Link>
          </li>
          <li>
            <Link to="/tickets"><img src={Tickets} alt="Tickets" />Tickets</Link>
          </li>
          <li>
            <a href="!"><img src={Ideas} alt="Ideas" />Ideas</a>
          </li>
          <li>
            <a href="!"><img src={Contacts} alt="Contacts" />Contacts</a>
          </li>
          <li>
            <a href="!"><img src={Agents} alt="Agents" />Agents</a>
          </li>
          <li>
            <a href="!"><img src={Articles} alt="Articles" />Articles</a>
          </li>
        </Nav>

        <Nav>
          <hr />

          <li>
            <a href="!"><img src={Settings} alt="Settings" />Settings</a>
          </li>
          <li>
            <a href="!"><img src={Subscription} alt="Subscription" />Subscription</a>
          </li>
        </Nav>
      </div>

    </Container>
  );
}
