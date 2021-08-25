import React from "react";
import { Nav } from "./styles";

function Pagination({ usersPerPage, totalUsers, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <Nav>
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
              <a onClick={() => paginate(number)} href="#">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </Nav>
    </div>
  );
}

export default Pagination;
