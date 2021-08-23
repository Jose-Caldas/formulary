import { Container, Wrapper, Select, Members, Loading } from "./styles";
import Items from "../members";
import { useClient } from "../../context/use-client";

export function MembersList() {
  const { users, loading } = useClient();

  return (
    <Container>
      <Wrapper>
        <p>Exibindo 9 de 25 itens</p>
        <Select>
          <option value="" hidden>
            Ordenar por:
          </option>
          <option value="1">Ordenar por: Nome</option>
          <option value="2">Ordenar por: Estado</option>
          <option value="3">Ordenar por: CEP</option>
          <option value="4">Ordenar por: Cidade</option>
        </Select>
      </Wrapper>
      {loading ? (
        <Loading>
          <img src="/dots.svg" />
        </Loading>
      ) : (
        <Members>
          {users.map((user, index) => (
            <Items
              key={index}
              email={user.email}
              name={user.name}
              location={user.location}
            />
          ))}
        </Members>
      )}
    </Container>
  );
}
