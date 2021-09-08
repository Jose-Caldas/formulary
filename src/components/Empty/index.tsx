import React from "react";
import { Warning } from "@styled-icons/entypo/Warning";
import { Wrapper } from "./styles";

function Empty() {
  return (
    <Wrapper>
      <h1>Nada encontrado!</h1>
      <Warning size={30} />
    </Wrapper>
  );
}

export default Empty;
