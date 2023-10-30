import { useContext } from "react";
import { Header } from "../../components/Header";
import { Post } from "./components/Post";
import { UserInfo } from "./components/UserInfo";
import {
  PageContainer,
  PostGaleryContainer,
  PostsHeaderContainer,
  PostsSection,
  SearchPostForm,
} from "./styles";
import { GithubUserContext } from "../../context/GithubUserContext";

export function Posts() {
  const { userData, issuesData } = useContext(GithubUserContext);

  return (
    <>
      <Header />
      <PageContainer>
        <UserInfo userInfoData={userData} />

        <PostsSection>
          <div>
            <PostsHeaderContainer>
              <h2>Publicações</h2>
              <span>{issuesData.length} publicações</span>
            </PostsHeaderContainer>
            <SearchPostForm>
              <input type="text" placeholder="Buscar por post" />
            </SearchPostForm>
          </div>

          {/* posts galery */}
          <PostGaleryContainer>
            {issuesData
              .sort((a, b) => {
                const dateA = new Date(a.updated_at);
                const dateB = new Date(b.updated_at);

                return dateA > dateB ? -1 : 1;
              })
              .map((issue) => {
                const { title, body, updated_at } = issue;
                const postData = { title, body, updated_at };
                return <Post key={issue.number} postData={postData} />;
              })}
          </PostGaleryContainer>
        </PostsSection>
      </PageContainer>
    </>
  );
}
