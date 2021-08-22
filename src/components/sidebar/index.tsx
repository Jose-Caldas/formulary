import { Wrapper, City } from "./styles";
import Link from "next/link";
import Checkbox from "../checkbox";

export function Sidebar() {
  return (
    <Wrapper>
      <h2>Por estado</h2>
      <City>
        <Checkbox name="city" label="São Paulo" labelFor="sp" />
      </City>
      <City>
        <Checkbox name="city" label="Rio de Janeiro" labelFor="rj" />
      </City>
      <City>
        <Checkbox name="city" label="Minas Gerais" labelFor="mg" />
      </City>

      <Link href="#">
        <a>Ver todos</a>
      </Link>
    </Wrapper>
  );
}
