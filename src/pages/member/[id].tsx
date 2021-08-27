import {
  FacebookWithCircle,
  LinkedinWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social";

import { useRouter } from "next/router";

import { Search } from "@styled-icons/feather/Search";
import {
  Container,
  Nav,
  Wrapper,
  Back,
  MemberInfo,
  Logo,
} from "../../styles/pages/member.styles";
import { useClient } from "../../context/use-client";
import Link from "next/link";
import { Footer, Social } from "../../styles/pages/home.styles";

export default function Member() {
  const { users, setFilter } = useClient();
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <Nav>
        <Logo>
          <img src="/logo.svg" alt="Logo" />
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
            Informações sobre: <span>{id}</span>
          </h1>
        </MemberInfo>
      </Wrapper>

      <Footer>
        <img src="/logoWhite.svg" alt="logo color white" />
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
