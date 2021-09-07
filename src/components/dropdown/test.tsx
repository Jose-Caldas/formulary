import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/helpers";
import userEvent from "@testing-library/user-event";

import Dropdown from ".";
//1 - Verificar se o Dropdown comeca fechado
describe("Dropdown", () => {
  it("should dropdown start closed", () => {
    renderWithTheme(<Dropdown />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  //2- Verificar se o Dropdown mostra as opções de menu quando for clicado
  it("should show menu options when open", () => {
    renderWithTheme(<Dropdown />);

    const dropdownOpen = screen.getByText(/ordenar por:/i);
    userEvent.click(dropdownOpen);

    expect(screen.getByRole("button", { name: /nome/i }));
    expect(screen.getByRole("button", { name: /cidade/i }));
  });

  //3 - Quando selecionar um item do menu, fechar o dropdown e indicar qual opção foi selecionada
});
