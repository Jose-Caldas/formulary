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
import { MemberList } from "../components/memberList";
import { useClient } from "../context/use-client";

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
        <MemberList />
      </Main>

      <Footer>
        <img src="logoWhite.svg" alt="logo color white" />
        <h2>Juntos Somos Mais Fidelização S.A.</h2>
        <h3>Siga-nos nas redes sociais:</h3>
        <Social>
          <FacebookWithCircle size={40} />
          <LinkedinWithCircle size={40} />
          <InstagramWithCircle size={40} />
        </Social>
      </Footer>
    </Container>
  );
}
