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
  name: Name;
  location: Location;
  email: string;
  dob?: Dob;
  registered?: Registered;
  phone?: string;
  cell?: string;
  picture?: Picture;
}

function Members({ email, name, location }: MembersProps) {
  return (
    <Wrapper>
      <img src="/user.svg" alt="avatar" />
      <Profile>
        <h2>{name.title}.</h2>
        <h2>{name.first}</h2>
        <h2>{name.last}</h2>
      </Profile>
      <h3>Email: {email}</h3>
      <Location>
        <p>{location.city}</p>
        <span>{location.state}</span>
      </Location>
    </Wrapper>
  );
}

export default Members;
