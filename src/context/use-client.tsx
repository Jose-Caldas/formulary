import axios from "axios";
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
import { User } from "./types";

export interface UsersContextData {
  users: User[];
  getUsers: () => void;
  setFilter: Dispatch<SetStateAction<string>>;
  loading: boolean;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const usersContextDefaultValue: UsersContextData = {
  users: [],
  getUsers: () => null,
  setFilter: () => null,
  loading: false,
  currentPage: 1,
  setCurrentPage: () => {},
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

  const getUsers = async () => {
    setLoading(true);
    const res = await axios.get(API_BASE_URL);

    const { results } = await res.data;
    setLoading(false);
    setUsers(results);
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

  return (
    <UserContext.Provider
      value={{
        getUsers,
        users: list,
        currentPage,
        setCurrentPage,
        setFilter,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
const useClient = () => useContext(UserContext);

export { UserProvider, useClient };
