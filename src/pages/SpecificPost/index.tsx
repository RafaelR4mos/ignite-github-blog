import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import {
  PageContainer,
  PostContentContainer,
  PostInfoContainer,
  PostSummaryContainer,
} from "./styles";
import { Link, useParams } from "react-router-dom";
import { GithubUserContext } from "../../context/GithubUserContext";
import { formatDateDistanceFromNow } from "../../utils/formatters";

import Markdown from "react-markdown";

export function SpecificPost() {
  const { id } = useParams();
  const { getIssue, singleIssueData, repo, username } =
    useContext(GithubUserContext);

  useEffect(() => {
    if (id) {
      getIssue(Number(id), username, repo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Header />
      <PageContainer>
        <PostInfoContainer>
          <header>
            <div>
              <Link to={"/"}>
                <i className="fa-solid fa-chevron-up fa-rotate-270"></i>
                Voltar
              </Link>
            </div>
            <div>
              <a
                href={`https://github.com/${username}/${repo}/issues/${id}`}
                target="_blank"
              >
                VER NO GITHUB
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </header>
          <h1>{singleIssueData?.title || "Dados da issue não encontrados"}</h1>
          <PostSummaryContainer>
            <div>
              <i className="fa-brands fa-github"></i>
              <span>{singleIssueData?.user.login}</span>
            </div>
            <div>
              <i className="fa-solid fa-calendar"></i>
              <span>
                {singleIssueData?.updated_at
                  ? formatDateDistanceFromNow(singleIssueData?.updated_at)
                  : "Sem data"}
              </span>
            </div>
            <div>
              <i className="fa-solid fa-comment"></i>
              <span>
                {singleIssueData?.comments === 0
                  ? "Sem comentários"
                  : singleIssueData?.comments}
              </span>
            </div>
          </PostSummaryContainer>
        </PostInfoContainer>

        <PostContentContainer>
          <div>
            <Markdown>{singleIssueData?.body}</Markdown>
          </div>
        </PostContentContainer>
      </PageContainer>
    </>
  );
}
