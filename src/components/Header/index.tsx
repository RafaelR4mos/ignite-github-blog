import logoImg from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="logo do github blog similar a uma tag HTML" />
        <h1>Github Blog</h1>
      </HeaderContent>
    </HeaderContainer>
  );
}
