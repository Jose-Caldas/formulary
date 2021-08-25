import { Container, Wrapper, Select, MembersContainer } from "./styles";
import Pagination from "../pagination";
import { useClient } from "../../context/use-client";
import { useState } from "react";
import Members from "../members";

export function MembersList() {
  const { users, loading } = useClient();
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(6);
  const [offset, setOffset] = useState(0);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Wrapper>
        <p>Exibindo</p>
        <Select>
          <option value="" hidden>
            Ordenar por:
          </option>
          <option value="1">Ordenar por: Nome</option>
          <option value="2">Ordenar por: Estado</option>
          <option value="3">Ordenar por: Email</option>
          <option value="4">Ordenar por: Cidade</option>
        </Select>
      </Wrapper>

      <MembersContainer>
        <Members users={currentUser} />
        <Pagination
          // usersPerPage={usersPerPage}
          // totalUsers={users.length}
          paginate={paginate}
          limit={usersPerPage}
          total={users.length}
          offset={offset}
          setOffset={setOffset}
        />
      </MembersContainer>
    </Container>
  );
}
