import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin-top: 20px;

  border-bottom: 1px solid #ddd;
  border-width: 100%;

  & div {
    display: flex;
    flex-direction: row;
    padding-left: 5px;
  }
`;

export const TitleText = styled.h3`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  width: 100%;

  color: #252733;
`;
