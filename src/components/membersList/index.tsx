import { Container, Wrapper, MembersContainer } from "./styles";
import Pagination from "../pagination";
import { useClient } from "../../context/use-client";
import Dropdown from "../dropdown";

export function MembersList() {
  const { users, loading } = useClient();

  return (
    <Container>
      <Wrapper>
        <p>Exibindo {users.length}</p>
        {/* <Select>
          <option value="" hidden>
            Ordenar por:
          </option>
          <option value="1">Ordenar por: Nome</option>
          <option value="2">Ordenar por: Estado</option>
          <option value="3">Ordenar por: Email</option>
          <option value="4">Ordenar por: Cidade</option>
        </Select> */}
        <Dropdown />
      </Wrapper>

      <MembersContainer>
        {loading ? <img src="/dots.svg" /> : <Pagination />}
      </MembersContainer>
    </Container>
  );
}
