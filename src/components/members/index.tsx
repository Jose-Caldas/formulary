import React from "react";
import { Wrapper, Profile, Info, Name, Location } from "./styles";

function Members({ users }) {
  return (
    <Wrapper>
      <Profile>
        {users.map((user, index) => (
          <ul key={index}>
            <li>
              <img src={user.picture.medium}></img>
              <Info>
                <Name>
                  <h1>{user.name.first}</h1>
                  <h1>{user.name.last}</h1>
                </Name>
                <p>{user.email}</p>
              </Info>
              <Location>
                <p>{user.location.city}</p>
                <h2>{user.location.state}</h2>
              </Location>
            </li>
          </ul>
        ))}
      </Profile>
    </Wrapper>
  );
}

export default Members;
