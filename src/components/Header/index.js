import React from "react";

import {
  Container,
  SearchAndNotification,
  ContentSearchAndNotification,
  User,
  Title,
} from "./styles";

import Search from "../../assets/images/search.png";
import Notifications from "../../assets/images/notifications.svg";

const Header = () => (
  <Container>
    <Title>Overview</Title>

    <ContentSearchAndNotification>
      <SearchAndNotification>
        <img src={Search} alt="search" />

        <div>
          <span>3</span>
          <img src={Notifications} alt="search" />
        </div>
      </SearchAndNotification>

      <User>
        Humberto Junior
        <img
          src="https://avatars0.githubusercontent.com/u/6500430?s=460&v=4"
          alt="avatar"
        />
      </User>
    </ContentSearchAndNotification>
  </Container>
);

export default Header;
