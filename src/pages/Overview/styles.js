import styled from "styled-components";

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Muli:400,600&display=swap');
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
  max-width: 1122px;

  background: #FFFFFF;
  border: 1px solid #DFE0EB;
  border-radius: 8px;

  & header {
    display: block;
    padding: 20px 0px 0px 20px;

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
      border-left: 1px solid #DFE0EB;
      border-collapse: collapse;
    }

    & div:last-child {
      border-bottom: 1px solid #fff;
    }
  }
`;

export const ContainerCardsFooter = styled.section`
  display: flex;
  flex-direction: row;

/*   & div:last-child {
    border-bottom: 1px solid #fff;
  } */
`;

export const CreateNewTask = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & h3 {
    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    padding-left: 20px;
    letter-spacing: 0.2px;
    color: #C5C7CD;
  }

  & button {
    background: #F0F1F7;
    border-radius: 8px;
    max-width: 30px;
    margin-right: 20px;
  }
`;
