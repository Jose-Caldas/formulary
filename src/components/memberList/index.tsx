import { Container, Wrapper, Select, Members } from "./styles";
import Items from "../items";
import { useClient } from "../../context/user-client";

export function MemberList() {
  const { users } = useClient();

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
      <Members>
        {users.map((user, index) => (
          <Items
            key={index}
            name={user.name}
            email={user.email}
            username={user.username}
            address={user.address.zipcode}
          />
        ))}
      </Members>
    </Container>
  );
}
