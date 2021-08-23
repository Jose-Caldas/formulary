import React from "react";
import { Wrapper } from "./styles";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface ItemsProps {
  id?: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
}

function Items({ name, email, username, phone }: ItemsProps) {
  return (
    <Wrapper>
      <h1>{name}</h1>
      <h2>Email: {email}</h2>
      <h3>Username: {username}</h3>
      <h3>Phone: {phone}</h3>
    </Wrapper>
  );
}

export default Items;
