import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 40px 0px 0px 0px;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
`;

export const ContainerCards = styled.section`
  display: flex;
  flex-direction: row;
`;

export const ContainerChart = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 0px 30px 0px;
  padding: 20px 20px 20px 20px;
  max-width: 1132px;

  background: #FFFFFF;
  border: 1px solid #DFE0EB;
  border-radius: 8px;

  & header {
    display: block;
    margin-bottom: 20px;

    & span {
      font-family: Muli;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.1px;
      color: #9FA2B4;
    }
  }

  & article {
    & div {
      border-bottom: 1px solid #DFE0EB;
    }

    & div:last-child {
      border: 1px solid #fff;
    }
  }
`;

export const ContainerCardsFooter = styled.section`
  display: flex;
  flex-direction: row;
`;
