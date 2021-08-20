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
} from "../styles/pages/home.styles";
import Head from "next/head";

export default function Home() {
  return (
    <Container>
      <MenuWrapper>
        <Menu>
          <Logo src="logo.svg" alt="Logo" />
          <Input>
            <Search size={17} />
            <input type="text" placeholder="Buscar aqui" />
          </Input>
        </Menu>
      </MenuWrapper>
      <Wrapper>
        <Head>
          <title>Formulary</title>
        </Head>
      </Wrapper>
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
