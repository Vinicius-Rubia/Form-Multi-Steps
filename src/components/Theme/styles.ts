import styled from "styled-components";

export const Container = styled.div`
  background-color: #02044a;
  color: #FFF;
  min-height: 100vh;

  @media (max-width: 800px) {
    padding: 0 45px;
  }
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: 500px) {
    display: block;
  }
`;

export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid #16195c;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Page = styled.div`
  flex: 1;
  padding: 40px 0 0 40px;

  @media (max-width: 500px) {
    padding: 40px 0 0 0;
  }
`;