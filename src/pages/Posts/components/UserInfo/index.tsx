import { githubUserData } from "../../../../utils/interface";
import {
  ImgContainer,
  SocialMediaContainer,
  UserInfoContainer,
  UserInfoContent,
} from "./styles";

interface UserInfoProps {
  userInfoData: githubUserData | null;
}

export function UserInfo({ userInfoData }: UserInfoProps) {
  return (
    <UserInfoContainer>
      <ImgContainer src={userInfoData?.avatar_url} alt="" />
      <UserInfoContent>
        <header>
          <strong>{userInfoData?.name || "Não encontrado"}</strong>
          <nav>
            <a
              href={`https://github.com/${userInfoData?.login}`}
              target="_blank"
            >
              GITHUB
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </nav>
        </header>

        <p>{userInfoData?.bio || "Não possui"}</p>
        <SocialMediaContainer>
          <div>
            <i className="fa-brands fa-github"></i>
            <span>{userInfoData?.login || "Não possui"}</span>
          </div>
          <div>
            <i className="fa-solid fa-building"></i>
            <span>{userInfoData?.company || "Não possui"}</span>
          </div>
          <div>
            <i className="fa-solid fa-user-group"></i>
            <span>{userInfoData?.followers || "Não possui"} seguidores</span>
          </div>
        </SocialMediaContainer>
      </UserInfoContent>
    </UserInfoContainer>
  );
}
