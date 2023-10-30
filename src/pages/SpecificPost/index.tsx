import { Header } from "../../components/Header";
import {
  PageContainer,
  PostContentContainer,
  PostInfoContainer,
  PostSummaryContainer,
} from "./styles";
import { Link } from "react-router-dom";

export function SpecificPost() {
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
              <a href="#" target="_blank">
                VER NO GITHUB
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </header>
          <h1>JavaScript data types and data structures</h1>
          <PostSummaryContainer>
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
          </PostSummaryContainer>
        </PostInfoContainer>

        <PostContentContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eius
            quis explicabo accusantium, nam nulla in corporis omnis repudiandae
            cum doloremque velit tempora. Cum, eum quod. Eum tempore earum
            laboriosam voluptate adipisci libero et ea sed, maiores autem nam
            ullam odit, vero facere quas impedit doloribus, vel ex praesentium
            corrupti ducimus. Dignissimos deleniti unde alias, soluta amet
            aperiam consequuntur sequi vitae sunt quia totam, at velit
            perspiciatis exercitationem delectus, architecto tempora
            necessitatibus? Consectetur natus sapiente nesciunt eveniet
            architecto ipsam veritatis vitae ex cum libero accusamus, eaque
            corporis, vero nostrum. Rem praesentium odio ducimus vero ratione
            deserunt itaque amet delectus nulla.
          </p>
        </PostContentContainer>
      </PageContainer>
    </>
  );
}
