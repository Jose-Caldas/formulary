// /* eslint-disable @next/next/no-img-element */

import {
  FacebookWithCircle,
  LinkedinWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social";

import { Search } from "@styled-icons/feather/Search";
import * as S from "../styles/pages/home.styles";
import { Sidebar } from "../components/sidebar";
import { MembersList } from "../components/membersList";
import { useMembers } from "../context/useMembers";
import Link from "next/link";
import MediaMatch from "../components/MediaMatch";
import Dropdown from "../components/dropdown";

export default function Home() {
  const {
    handlers: { setFilter },
    state: { loading },
  } = useMembers();

  return (
    <S.Container>
      <S.MenuWrapper>
        <S.Menu>
          <S.Logo src="logo.svg" alt="Logo" />

          <S.Input>
            <Search size={17} />
            <input
              type="search"
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Buscar aqui"
            />
          </S.Input>

          <MediaMatch lessThan="large">
            <S.MenuMobile>
              <Dropdown />
            </S.MenuMobile>
          </MediaMatch>
        </S.Menu>
      </S.MenuWrapper>
      <S.Title>Lista de membros</S.Title>;
      <S.Main>
        {loading ? (
          <>
            <img src="/dots.svg" alt="loading" />
          </>
        ) : (
          <>
            <MediaMatch greaterThan="large">
              <Sidebar />
            </MediaMatch>
            <MembersList />
          </>
        )}
      </S.Main>
      <S.Footer>
        <img src="logoWhite.svg" alt="logo Juntos somos mais" />
        <h2>Juntos Somos Mais Fidelização S.A.</h2>
        <h3>Siga-nos nas redes sociais:</h3>
        <S.Social>
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
        </S.Social>
      </S.Footer>
    </S.Container>
  );
}
