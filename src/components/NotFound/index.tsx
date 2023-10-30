import { Header } from "../Header";
import { Link } from "react-router-dom";
import { PageContainerNotFound } from "./styles";

export function NotFound() {
  return (
    <>
      <Header />
      <PageContainerNotFound>
        <h1>Ops... esta página não foi encontrada🙁.</h1>
        <Link to={"/"}>
          <i className="fa-solid fa-chevron-up fa-rotate-270"></i>
          Retorne para o início!
        </Link>
      </PageContainerNotFound>
    </>
  );
}
