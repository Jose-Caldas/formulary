/* eslint-disable @typescript-eslint/no-empty-function */
import axios from "axios";
import { prop, sortBy, uniqBy } from "ramda";
import {
  useState,
  useMemo,
  useEffect,
  createContext,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import { capitalize } from "../components/capitalize";

import { StateMapper, User } from "./types";

export interface UsersContextData {
  state: {
    users: User[];
    loading: boolean;
    currentPage: number;
    states: StateMapper[];
  };
  handlers: {
    setFilter: Dispatch<SetStateAction<string>>;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    setSort: Dispatch<SetStateAction<string>>;
    setRegions: Dispatch<SetStateAction<string[]>>;
  };
}

export const usersContextDefaultValue: UsersContextData = {
  state: {
    users: [],
    loading: false,
    currentPage: 1,
    states: [],
  },
  handlers: {
    setFilter: () => {},
    setCurrentPage: () => {},
    setSort: () => {},
    setRegions: () => {},
  },
};

export const UserContext = createContext<UsersContextData>(
  usersContextDefaultValue
);

const API_BASE_URL =
  "https://run.mocky.io/v3/3150d4b0-fb4e-44af-94d2-689b46d91129";

export type UserProviderProps = {
  children: ReactNode;
};

function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [regions, setRegions] = useState<string[]>([]);
  const [sort, setSort] = useState<string>("id");
  const [states, setStates] = useState<StateMapper[]>([]);

  const getUsers = async () => {
    setLoading(true);
    const res = await axios.get(API_BASE_URL);

    const { results } = await res.data;

    const members = results.map((member) => ({
      ...member,
      id: `${member.name.first}`,
      state: member.location.state,
    }));

    const payload = results.map((member) => ({
      label: capitalize(member.location.state),
      value: member.location.state,
    }));

    setStates(payload);
    setLoading(false);
    setUsers(members);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const list = useMemo(() => {
    const isFiltering = filter.length === 0;
    setCurrentPage(1);

    return isFiltering
      ? users
      : users.filter(
          (user) =>
            user.name.last.toLowerCase().includes(filter.toLowerCase()) ||
            user.name.first.toLowerCase().includes(filter.toLowerCase())
        );
  }, [users, filter]);

  const listWithFilters = useMemo(() => {
    return sortBy(prop(sort), list).filter((user) =>
      regions.length > 0 ? regions.includes(user.state) : user
    );
  }, [list, sort, regions]);

  return (
    <UserContext.Provider
      value={{
        state: {
          users: listWithFilters,
          states: uniqBy(prop("label"), states),
          currentPage,
          loading,
        },
        handlers: {
          setCurrentPage: (n: number) => setCurrentPage(n),
          setFilter: (s: string) => setFilter(s),
          setSort: (s: string) => setSort(s),
          setRegions: (as: string[]) => setRegions(as),
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
const useMembers = () => useContext(UserContext);

export { UserProvider, useMembers };
