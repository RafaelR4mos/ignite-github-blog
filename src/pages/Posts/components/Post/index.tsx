import { PostContainer, PostContentContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { IssuesDataType } from "../../../../utils/interface";
import { formatDateDistanceFromNow } from "../../../../utils/formatters";

import Markdown from "react-markdown";
import TextTruncate from "react-text-truncate";

interface PostProps {
  postData: IssuesDataType;
}

export function Post({ postData }: PostProps) {
  const navigate = useNavigate();

  return (
    <PostContainer onClick={() => navigate(`post/${postData.number}`)}>
      <header>
        <strong>{postData.title}</strong>
        <span>{formatDateDistanceFromNow(postData.updated_at)}</span>
      </header>
      <PostContentContainer>
        <TextTruncate
          line={4}
          element="p"
          truncateText="..."
          text={postData.body}
        />
      </PostContentContainer>
    </PostContainer>
  );
}
