import { useState } from "react";
import * as S from "./styles";
import { ExpandMore } from "@styled-icons/material/ExpandMore";
import { useMembers } from "../../context/useMembers";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handlers } = useMembers();
  const { setSort } = handlers;
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>
        Ordenar por: <ExpandMore size={35} />
      </S.Title>

      <S.Content aria-hidden={!isOpen}>
        <button
          onClick={() => {
            setIsOpen(false);
            setSort("id");
          }}
        >
          <a>Nome</a>
        </button>
        <button
          onClick={() => {
            setIsOpen(false);
            setSort("email");
          }}
        >
          <a>Email</a>
        </button>
        <button
          onClick={() => {
            setIsOpen(false);
            setSort("state");
          }}
        >
          <a>Estado</a>
        </button>
      </S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </S.Wrapper>
  );
};

export default Dropdown;
