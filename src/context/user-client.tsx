import {
  useState,
  useMemo,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";

export const UserContext = createContext({});

const API_BASE_URL = "https://jsonplaceholder.typicode.com/users";

export type UserProviderProps = {
  children: ReactNode;
};

function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  const getUsers = async () => {
    const res = await fetch(API_BASE_URL);
    const data = await res.json();

    function createMembersObj(data) {
      data.forEach(async (user) => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${user.id}`
        );
        const data = await res.json();

        setUsers((currentList) => [...currentList, data]);
      });
    }

    createMembersObj(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const list = useMemo(() => {
    const isFiltering = filter.length === 0;

    return isFiltering
      ? users
      : users.filter((user) =>
          user.name.toLowerCase().includes(filter.toLowerCase())
        );
  }, [users, filter]);

  return (
    <UserContext.Provider
      value={{
        getUsers,

        users: list,
        list,
        filter,
        setFilter,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
const useClient = () => useContext(UserContext);

export { UserProvider, useClient };
