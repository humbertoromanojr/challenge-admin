import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px 0;
`;

export const Title = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;
  margin-left: 13px;

  /* grayscale / black */
  color: #252733;
`;

export const ContentSearchAndNotification = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
`;

export const SearchAndNotification = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  height: 24px;
  width: 175px;
  padding: 6px 7px 6px 26px;

  div {
    margin-left: 16px;

    padding-right: 20px;
    border-right: 1px solid #eee;

  }

  img {
    width: 25px;
    padding-left: 6px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-family: Muli, sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  width: 275px;

  /* or 143% */
  text-align: right;
  letter-spacing: 0.2px;

  color: #252733;

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-right: 5px;
    margin-left: 6px;
    padding: 2px;
    border: 1.5px solid #DFE0EB;
    box-shadow: 0 0 12px #ddd;
  }
`;
