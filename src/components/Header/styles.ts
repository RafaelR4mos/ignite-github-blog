import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 35vh;
  background-image: url("/header-cover.png");
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.375rem;

  & > h1 {
    font-weight: 400;
    font-family: "Coda", sans-serif;
    color: ${(props) => props.theme.blue};
  }
`;
