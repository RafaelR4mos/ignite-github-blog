import styled from "styled-components";
import { PageContainer } from "../../pages/Posts/styles";

export const PageContainerNotFound = styled(PageContainer)`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme["base-title"]};
    font-weight: 700;
    padding: 0.8rem 1rem;
  }
`;
