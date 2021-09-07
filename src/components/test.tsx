import Home from "../pages/index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

jest.mock("../context/useMembers", () => ({
  useMembers: () => ({
    state: {
      loading: false,
      users: [],
    },
    handlers: {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      setFilter: () => {},
    },
  }),
}));

jest.mock("ramda", () => ({
  take: () => [],
}));

describe("Title", () => {
  it("should render title correctly", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );

    const title = await screen.findByText(/Lista de membros/i);

    expect(title).toBeInTheDocument();
  });
});
