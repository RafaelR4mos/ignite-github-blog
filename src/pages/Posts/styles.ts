import styled from "styled-components";

export const PageContainer = styled.main`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 1rem 3rem;
`;

export const PostsSection = styled.section`
  margin-top: 4.5rem;
`;

export const PostsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchPostForm = styled.form`
  display: flex;
  margin-top: 0.75rem;

  & > input {
    border-radius: 6px;
    padding: 0.75rem 1rem;
    flex: 1;
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;

export const PostGaleryContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
