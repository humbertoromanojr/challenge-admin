import styled from "styled-components";

export const Container = styled.aside`
  height: 100%;
  width: 200px;

  background: #363740;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    /*first div child*/
    padding: 25px;
  }
`;

export const Nav = styled.ul`
  list-style: none;

  margin-top: 25px;
  &:first-child {
    margin: 0;
  }

  & hr {
    display: block;
    border: 0.5px solid #444;
    width: 200px;
  }

  li {
    display: flex;
    align-items: center;

    span {
      font-size: 13px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }

    a {
      color: inherit; /*Mesma color do container*/
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;
      cursor: pointer;
      color: #A4A6B3;

      &:hover {
        color: #fff;
      }
    }

    img {
      margin-right: 16px;
      width: 12px;

      &:hover {
        color: #fff;
      }
    }
  }
`;
