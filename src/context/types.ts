export type StateMapper = { label: string; value: string };

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

export interface User {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  picture: Picture;
}
