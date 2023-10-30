import { Header } from "../../components/Header";
import { UserInfo } from "./components/UserInfo";
import { PageContainer } from "./styles";

export function Posts() {
  return (
    <>
      <Header />
      <PageContainer>
        <UserInfo />
      </PageContainer>
    </>
  );
}
