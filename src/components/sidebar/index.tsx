import { Wrapper, City } from "./styles";
import Link from "next/link";

export function Sidebar() {
  return (
    <Wrapper>
      <h2>Por estado</h2>
      <City>
        <input type="checkbox" name="city" id="sp" />
        <label htmlFor="sp">São Paulo</label>
      </City>
      <City>
        <input type="checkbox" name="city" id="rj" />
        <label htmlFor="rj">Rio de Janeiro</label>
      </City>
      <City>
        <input type="checkbox" name="city" id="mg" />
        <label htmlFor="mg">Minas Gerais</label>
      </City>
      <City>
        <input type="checkbox" name="city" id="es" />
        <label htmlFor="es">Espirito Santo</label>
      </City>
      <City>
        <input type="checkbox" name="city" id="b" />
        <label htmlFor="b">Bahia</label>
      </City>
      <Link href="#">
        <a>Ver todos</a>
      </Link>
    </Wrapper>
  );
}
