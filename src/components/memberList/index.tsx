import { Container, Wrapper, Select, Members, Items } from "./styles";

export function MemberList() {
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
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
      </Members>
    </Container>
  );
}
