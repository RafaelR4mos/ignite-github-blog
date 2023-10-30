import { PostContainer, PostContentContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";
import TextTruncate from "react-text-truncate";

interface PostProps {
  postData: {
    title: string;
    updated_at: string;
    body: string;
  };
}

export function Post({ postData }: PostProps) {
  const dateDistanceFromNow = formatDistanceToNow(
    new Date(postData.updated_at),
    {
      locale: ptBR,
      addSuffix: true,
    }
  );

  return (
    <PostContainer>
      <header>
        <strong>{postData.title}</strong>
        <span>{dateDistanceFromNow}</span>
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
