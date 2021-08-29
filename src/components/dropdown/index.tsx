import Link from "next/link";
import { useState } from "react";
import * as S from "./styles";
import { ExpandMore } from "@styled-icons/material/ExpandMore";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>
        Ordenar por: <ExpandMore size={40} />
      </S.Title>

      <S.Content aria-hidden={!isOpen}>
        <Link href="#">
          <a>Nome</a>
        </Link>
        <Link href="#">
          <a>Email</a>
        </Link>
        <Link href="#">
          <a>Cidade</a>
        </Link>
        <Link href="#">
          <a>Estado</a>
        </Link>
      </S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </S.Wrapper>
  );
};

export default Dropdown;
