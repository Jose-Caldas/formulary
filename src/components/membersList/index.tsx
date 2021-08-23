import {
  Container,
  Wrapper,
  Select,
  Members,
  Loading,
  Paginate,
  Pagination,
  Navigation,
} from "./styles";
import Items from "../members";
import { useClient } from "../../context/use-client";
import { ArrowIosBack, ArrowIosForward } from "@styled-icons/evaicons-solid";
import { ButtonHTMLAttributes } from "react";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

type MemberListProps = {} & ButtonTypes;

export function MembersList({}: MemberListProps) {
  const { users, loading } = useClient();

  let perPage = 20;
  const state = {
    page: 1,
    perPage,
    totalPage: users.length / perPage,
  };

  const controls = {
    next() {
      state.page++;
      const lastPage = state.page > state.totalPage;
      if (lastPage) {
        state.page--;
      }
    },
    prev() {
      state.page--;
      if (state.page < 1) {
        state.page++;
      }
    },
    goTo(page) {
      if (page < 1) {
        page = 1;
      }
      state.page = page;
      if (page > state.totalPage) {
        state.page = state.totalPage;
      }
    },
  };
  console.log(state.page);
  controls.goTo(22);
  console.log(state.page);

  return (
    <Container>
      <Wrapper>
        <p>
          Exibindo {users.length} de {users.length} itens
        </p>
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
        <Paginate>
          <Members>
            {users.map((user, index) => (
              <Items
                key={index}
                email={user.email}
                name={user.name}
                location={user.location}
                picture={user.picture}
              />
            ))}
          </Members>
        </Paginate>
      )}
      <Pagination>
        <Navigation>
          <button onClick={controls.prev()}>
            <ArrowIosBack size={20} />
          </button>
          <h1>1</h1>
          <button onClick={controls.next()}>
            <ArrowIosForward size={20} />
          </button>
        </Navigation>
      </Pagination>
    </Container>
  );
}
