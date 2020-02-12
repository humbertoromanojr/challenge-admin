import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  margin: 40px 0px 0px 0px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  background: #fff;
  min-width: 1122px;
`;

export const ContentHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;

  & span {
    align-items: center;
    padding: 0px 30px 0px 5px;

    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #4B506D;

  }
`;

