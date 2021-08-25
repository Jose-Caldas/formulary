import {
  FacebookWithCircle,
  LinkedinWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social";

import { Search } from "@styled-icons/feather/Search";
import {
  Container,
  Menu,
  Input,
  Wrapper,
  MenuWrapper,
  Logo,
  Footer,
  Social,
  Title,
  Main,
} from "../styles/pages/home.styles";
import { Sidebar } from "../components/sidebar";
import { MembersList } from "../components/membersList";
import { useClient } from "../context/use-client";
import Link from "next/link";

export default function Home() {
  const { setFilter } = useClient();
  return (
    <Container>
      <MenuWrapper>
        <Menu>
          <Logo src="logo.svg" alt="Logo" />
          <Input>
            <Search size={17} />
            <input
              type="text"
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Buscar aqui"
            />
          </Input>
        </Menu>
      </MenuWrapper>
      <Title>Lista de membros</Title>
      <Main>
        <Sidebar />
        <MembersList />
      </Main>

      <Footer>
        <img src="logoWhite.svg" alt="logo color white" />
        <h2>Juntos Somos Mais Fidelização S.A.</h2>
        <h3>Siga-nos nas redes sociais:</h3>
        <Social>
          <Link href="#">
            <a>
              <FacebookWithCircle size={40} />
            </a>
          </Link>
          <Link href="#">
            <a>
              <LinkedinWithCircle size={40} />
            </a>
          </Link>
          <Link href="#">
            <a>
              <InstagramWithCircle size={40} />
            </a>
          </Link>
        </Social>
      </Footer>
    </Container>
  );
}
