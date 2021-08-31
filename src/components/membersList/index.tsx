/* eslint-disable @next/next/no-img-element */
import * as S from "./styles";
import Pagination from "../pagination";
import { useMembers } from "../../context/useMembers";
import Dropdown from "../dropdown";
import MediaMatch from "../MediaMatch";

export function MembersList() {
  const {
    state: { loading },
  } = useMembers();

  return (
    <S.Container>
      <MediaMatch greaterThan="large">
        <S.Wrapper>
          <p>Exibindo 9 de 25 items</p>

          <Dropdown />
        </S.Wrapper>
      </MediaMatch>

      <S.MembersContainer>
        {loading ? <img src="/dots.svg" alt="loading" /> : <Pagination />}
      </S.MembersContainer>
    </S.Container>
  );
}
