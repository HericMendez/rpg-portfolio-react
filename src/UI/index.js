import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
  margin-right: 10%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    overflow: scroll;
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  padding: 0px 15px;
  margin: 0 15px;
`;

export const ContentRight = styled.div`
  display: flex;
  padding: 0px 15px;
  margin: 0 15px;
`;
