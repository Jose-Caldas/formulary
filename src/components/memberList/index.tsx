import { Container, Wrapper, Select, Members } from "./styles";
import { useEffect, useState } from "react";
import Items from "../items";

export function MemberList() {
  const [members, setMembers] = useState([]);

  const baseUrl = `https://jsonplaceholder.typicode.com/users`;
  const getMembers = async () => {
    const res = await fetch(baseUrl);
    const data = await res.json();

    function createMembersObj(data) {
      data.forEach(async (user) => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${user.id}`
        );
        const data = await res.json();

        setMembers((currentList) => [...currentList, data]);
      });
    }

    console.log(members);
    createMembersObj(data);
  };
  useEffect(() => {
    getMembers();
  }, []);

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
        {members.map((member, index) => (
          <Items
            key={index}
            name={member.name}
            email={member.email}
            username={member.username}
            address={member.address.zipcode}
          />
        ))}
      </Members>
    </Container>
  );
}
