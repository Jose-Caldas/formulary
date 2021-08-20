import {
  FacebookWithCircle,
  LinkedinWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social";
import {
  Container,
  Menu,
  Wrapper,
  MenuWrapper,
  Logo,
  Image,
  Footer,
  Social,
} from "../styles/pages/home.styles";
import Head from "next/head";

export type HomeProps = {
  title: string;
  description: string;
};

export default function Home({ description, title }: HomeProps) {
  return (
    <Container>
      <MenuWrapper>
        <Menu>
          <Logo>
            <Image src="logo.svg" alt="Logo"></Image>
          </Logo>
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
