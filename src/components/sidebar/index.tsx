import * as S from "./styles";
import Link from "next/link";
import Checkbox from "../checkbox";
import { useClient } from "../../context/useMembers";
import { useMemo } from "react";
import { take } from "ramda";
import { useState } from "react";

export function Sidebar() {
  const {
    handlers: { setRegions },
    state: { states },
  } = useClient();

  const [showAll, setShowAll] = useState(false);

  const first3 = useMemo(() => {
    return take(3, states);
  }, [states]);

  const list = useMemo(() => {
    return showAll ? states : first3;
  }, [first3, states, showAll]);

  return (
    <S.Wrapper>
      <h2>Por estado</h2>
      {list.map((state) => (
        <S.City key={state.label}>
          <Checkbox
            name="city"
            label={state.label}
            labelFor={state.label}
            onCheck={(status) =>
              setRegions((prev) =>
                status
                  ? [...prev, state.value]
                  : prev.filter((region) => region !== state.value)
              )
            }
          />
        </S.City>
      ))}

      <button onClick={() => setShowAll((prev) => !prev)}>
        {showAll ? "Ver menos" : "Ver todos"}
      </button>
    </S.Wrapper>
  );
}
