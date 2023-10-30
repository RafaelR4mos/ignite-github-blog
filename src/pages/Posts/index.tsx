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
import { useForm } from "react-hook-form";

interface SearchIssuesInputs {
  title: string;
}

export function Posts() {
  const { userData, issuesData, searchForIssues } =
    useContext(GithubUserContext);
  const { handleSubmit, register, reset } = useForm<SearchIssuesInputs>();

  function handleSearchIssues(data: SearchIssuesInputs) {
    searchForIssues("RafaelR4mos", "ignite-github-blog", data.title);
    reset();
  }

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
            <SearchPostForm onSubmit={handleSubmit(handleSearchIssues)}>
              <input
                type="text"
                placeholder="Busque o título de um post"
                {...register("title")}
              />
            </SearchPostForm>
          </div>

          {/* posts galery */}
          <PostGaleryContainer>
            {issuesData.length > 0 ? (
              issuesData
                .sort((a, b) => {
                  const dateA = new Date(a.updated_at);
                  const dateB = new Date(b.updated_at);

                  return dateA > dateB ? -1 : 1;
                })
                .map((issue) => {
                  return <Post key={issue.id} postData={issue} />;
                })
            ) : (
              <strong>
                Não foram encontradas issues com esta busca. Busque por outro
                título!
              </strong>
            )}
          </PostGaleryContainer>
        </PostsSection>
      </PageContainer>
    </>
  );
}
