import {
  ImgContainer,
  SocialMediaContainer,
  UserInfoContainer,
  UserInfoContent,
} from "./styles";
import avatarImg from "../../../../assets/avatar.png";

export function UserInfo() {
  return (
    <UserInfoContainer>
      <ImgContainer src={avatarImg} alt="" />
      <UserInfoContent>
        <header>
          <strong>Cameron Williamson</strong>
          <a href="#">
            GITHUB
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <SocialMediaContainer>
          <div>
            <i className="fa-brands fa-github"></i>
            <span>cameronwll</span>
          </div>
          <div>
            <i className="fa-solid fa-building"></i>
            <span>Rocketseat</span>
          </div>
          <div>
            <i className="fa-solid fa-user-group"></i>
            <span>32 seguidores</span>
          </div>
        </SocialMediaContainer>
      </UserInfoContent>
    </UserInfoContainer>
  );
}
