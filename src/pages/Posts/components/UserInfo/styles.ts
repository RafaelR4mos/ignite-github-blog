import styled from "styled-components";

export const UserInfoContainer = styled.div`
  max-width: 100%;
  border-radius: 10px;
  padding: 2rem 2rem 2rem 2.5rem;

  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 2rem;
  margin-top: -84px;

  background-color: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 20px 28px 0px rgba(0, 0, 0, 0.2);
`;

export const ImgContainer = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const UserInfoContent = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  & > header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.blue};
      font-weight: 700;
      font-size: 0.875rem;
    }

    & > strong {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${(props) => props.theme["base-title"]};
    }
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > i {
      color: ${(props) => props.theme["base-label"]};
    }

    & > span {
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;
