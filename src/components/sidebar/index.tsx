import * as S from "./styles";
import Link from "next/link";
import Checkbox from "../checkbox";

export function Sidebar() {
  return (
    <S.Wrapper>
      <h2>Por estado</h2>
      <S.City>
        <Checkbox name="city" label="São Paulo" labelFor="sp" />
      </S.City>
      <S.City>
        <Checkbox name="city" label="Rio de Janeiro" labelFor="rj" />
      </S.City>
      <S.City>
        <Checkbox name="city" label="Minas Gerais" labelFor="mg" />
      </S.City>

      <Link href="#">
        <a>Ver todos</a>
      </Link>
    </S.Wrapper>
  );
}
