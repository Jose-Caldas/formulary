import * as S from "./styles";
import Pagination from "../pagination";
import { useClient } from "../../context/use-client";
import Dropdown from "../dropdown";
import MediaMatch from "../MediaMatch";

export function MembersList() {
  const { users, loading } = useClient();

  return (
    <S.Container>
      <MediaMatch greaterThan="large">
        <S.Wrapper>
          <p>Exibindo {users.length}</p>

          <Dropdown />
        </S.Wrapper>
      </MediaMatch>

      <S.MembersContainer>
        {loading ? <img src="/dots.svg" /> : <Pagination />}
      </S.MembersContainer>
    </S.Container>
  );
}
