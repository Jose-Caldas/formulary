import React from "react";
import { Wrapper, Profile, Location } from "./styles";

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Location {
  street: string;
  city: string;
  state: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Dob {
  date: Date;
  age: number;
}

export interface Registered {
  date: Date;
  age: number;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface MembersProps {
  gender?: string;
  name?: Name;
  location?: Location;
  email: string;
  dob?: Dob;
  registered?: Registered;
  phone?: string;
  cell?: string;
  picture: Picture;
}

function Members({ users }) {
  return (
    <Wrapper>
      <Profile>
        {users.map((user, index) => (
          <ul key={index}>
            <li>
              <img src={user.picture.medium}></img>
              <h1>{user.name.first}</h1>
            </li>
          </ul>
        ))}
      </Profile>
    </Wrapper>
  );
}

export default Members;
