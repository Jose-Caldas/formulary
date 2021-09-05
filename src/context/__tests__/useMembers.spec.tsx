import { useMembers, UserProvider } from "../useMembers";
import { renderHook, act } from "@testing-library/react-hooks";
import { setupServer } from "msw/node";
import { rest } from "msw";
const mockResponse = [
  {
    gender: "female",
    name: {
      title: "mrs",
      first: "alejandra",
      last: "rodrigues",
    },
    location: {
      street: "3833 rua santa catarina ",
      city: "umuarama",
      state: "santa catarina",
      postcode: 43646,
      coordinates: {
        latitude: "-50.7186",
        longitude: "-20.4596",
      },
      timezone: {
        offset: "+3:00",
        description: "Baghdad, Riyadh, Moscow, St. Petersburg",
      },
    },
    email: "alejandra.rodrigues@example.com",
    dob: {
      date: "1974-05-16T14:46:15Z",
      age: 44,
    },
    registered: {
      date: "2013-03-06T16:09:16Z",
      age: 5,
    },
    phone: "(09) 7033-7406",
    cell: "(54) 3190-3469",
    picture: {
      large: "https://randomuser.me/api/portraits/women/18.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/18.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/18.jpg",
    },
  },
  {
    gender: "male",
    name: {
      title: "mr",
      first: "armando",
      last: "da cruz",
    },
    location: {
      street: "7032 rua santa luzia ",
      city: "natal",
      state: "roraima",
      postcode: 36455,
      coordinates: {
        latitude: "-30.5678",
        longitude: "-50.2905",
      },
      timezone: {
        offset: "+11:00",
        description: "Magadan, Solomon Islands, New Caledonia",
      },
    },
    email: "armando.dacruz@example.com",
    dob: {
      date: "1946-07-01T15:04:40Z",
      age: 72,
    },
    registered: {
      date: "2008-08-15T23:19:15Z",
      age: 10,
    },
    phone: "(22) 0715-7330",
    cell: "(23) 0893-7159",
    picture: {
      large: "https://randomuser.me/api/portraits/men/54.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/54.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/54.jpg",
    },
  },
];

const server = setupServer(
  rest.get(
    "https://run.mocky.io/v3/3150d4b0-fb4e-44af-94d2-689b46d91129",
    (req, res, ctx) => {
      return res(
        ctx.json({
          results: mockResponse,
        })
      );
    }
  )
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useMembers hook", () => {
  it("should render hook with default value", async () => {
    const { result, waitForNextUpdate } = renderHook(useMembers, {
      wrapper: UserProvider,
    });

    const handlers = {
      setFilter: expect.any(Function),
      setCurrentPage: expect.any(Function),
      setSort: expect.any(Function),
      setRegions: expect.any(Function),
    };

    const initialState = {
      users: [],
      loading: true,
      currentPage: 1,
      states: [],
    };

    const expectedState = {
      users: [
        { ...mockResponse[0], state: "santa catarina", id: "alejandra" },
        { ...mockResponse[1], state: "roraima", id: "armando" },
      ],
      loading: false,
      currentPage: 1,
      states: [
        {
          label: "Santa Catarina",
          value: "santa catarina",
        },
        {
          label: "Roraima",
          value: "roraima",
        },
      ],
    };

    const usersContextDefaultValue = {
      state: initialState,
      handlers,
    };

    // Valor inicial
    expect(result.current).toStrictEqual(usersContextDefaultValue);

    // Depois 2 render
    await act(async () => await waitForNextUpdate());

    // Chamada a API interceptada e retornando o mock
    expect(result.current).toStrictEqual({ handlers, state: expectedState });

    // alterando a pagina para 2
    act(() => result.current.handlers.setCurrentPage(2));

    // assertiva no estado checando a pagina
    expect(result.current).toStrictEqual({
      handlers,
      state: { ...expectedState, currentPage: 2 },
    });

    // filtrando com o valor banana

    act(() => result.current.handlers.setFilter("banana"));

    // simulando o filtro e retornando o estado
    expect(result.current).toStrictEqual({
      handlers,
      state: { ...expectedState, users: [] },
    });

    // filtrando com o valor ar
    act(() => result.current.handlers.setFilter("ar"));

    // assetiva para verificar se armando esta na lista
    expect(result.current).toStrictEqual({
      handlers,
      state: {
        ...expectedState,
        users: [{ ...mockResponse[1], state: "roraima", id: "armando" }],
      },
    });

    // resetando o filtro
    act(() => result.current.handlers.setFilter(""));

    //filtrando por regiao
    act(() => result.current.handlers.setRegions(["santa catarina"]));

    expect(result.current).toStrictEqual({
      handlers,
      state: {
        ...expectedState,
        users: [
          { ...mockResponse[0], state: "santa catarina", id: "alejandra" },
        ],
      },
    });

    act(() => result.current.handlers.setRegions([]));
    act(() => result.current.handlers.setSort("state"));

    expect(result.current).toStrictEqual({
      handlers,
      state: {
        ...expectedState,
        users: [
          { ...mockResponse[1], state: "roraima", id: "armando" },
          { ...mockResponse[0], state: "santa catarina", id: "alejandra" },
        ],
      },
    });
  });
});
