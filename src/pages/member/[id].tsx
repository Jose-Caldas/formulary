import {
  FacebookWithCircle,
  LinkedinWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social";

import {
  Container,
  Nav,
  Wrapper,
  Back,
  MemberInfo,
  Logo,
} from "../../styles/pages/member.styles";
import Link from "next/link";
import { Footer, Social } from "../../styles/pages/home.styles";
import axios from "axios";
import { User } from "../../context/types";

import logo from "../../assets/logo.svg";
import logoWhite from "../../assets/LogoWhite.svg";

import Image from "next/image";

export default function Member({ member }: { member: { params: User } }) {
  return (
    <Container>
      <Nav>
        <Logo>
          {/* <img src="/logo.svg" alt="Logo" /> */}

          <Image src={logo} alt="logo color white" />
        </Logo>
      </Nav>
      <Wrapper>
        <Back>
          <Link href="/">
            <a className="back">Voltar</a>
          </Link>
        </Back>
        <MemberInfo>
          <h1>
            Informações sobre: <span>{member?.params?.name?.first}</span>
          </h1>
        </MemberInfo>
      </Wrapper>

      <Footer>
        <Image src={logoWhite} alt="logo color white" />
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

export async function getStaticPaths() {
  const API_BASE_URL =
    "https://run.mocky.io/v3/3150d4b0-fb4e-44af-94d2-689b46d91129";

  try {
    const res = await axios.get<{ results: User[] }>(API_BASE_URL);
    const { results } = res.data;
    const members = results.map((member) => ({
      params: { ...member, id: `${member.name.first}-${member.name.last}` },
    }));

    return {
      paths: members,
      fallback: true,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  const API_BASE_URL =
    "https://run.mocky.io/v3/3150d4b0-fb4e-44af-94d2-689b46d91129";

  try {
    const res = await axios.get<{ results: User[] }>(API_BASE_URL);

    const { results } = res.data;
    const members = results.map((member) => ({
      params: { ...member, id: `${member.name.first}-${member.name.last}` },
    }));
    return {
      props: {
        member: members.find((member) => member.params.id === params.id),
      },
    };
  } catch (error) {
    return {
      props: { member: {} },
    };
  }
}
