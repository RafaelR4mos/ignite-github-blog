import { styled } from "styled-components";
import { SocialMediaContainer } from "../Posts/components/UserInfo/styles";

export const PageContainer = styled.main`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 1rem 3rem;
`;

export const PostInfoContainer = styled.div`
  max-width: 100%;
  border-radius: 10px;
  padding: 2rem 2rem 2rem 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: -84px;

  background-color: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 20px 28px 0px rgba(0, 0, 0, 0.2);

  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div {
      &:after {
        content: "";
        display: block;
        visibility: hidden;
        height: 2px;
        width: 100%;
        background-color: ${(props) => props.theme.blue};
        transform: all 0.2s;
      }

      &:hover::after {
        visibility: visible;
      }
    }

    a {
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.blue};
      text-transform: uppercase;

      &:active {
        box-shadow: none;
      }
    }

    h1 {
      color: ${(props) => props.theme["base-title"]};
      font-size: 1.5rem;
    }
  }
`;

export const PostSummaryContainer = styled(SocialMediaContainer)`
  justify-content: flex-start;

  & > div span {
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const PostContentContainer = styled.div`
  margin-top: 2.5rem;
  padding: 0 2rem;
`;
