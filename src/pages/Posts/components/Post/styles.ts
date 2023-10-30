import styled from "styled-components";

export const PostContainer = styled.article`
  max-height: 260px;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-post"]};

  & > header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    & strong {
      max-width: 280px;
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-title"]};
    }

    & span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-span"]};
    }
  }
`;

export const PostContentContainer = styled.div`
  margin-top: 1.25rem;
  max-width: 350px;
  max-height: 120px;

  & p {
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
