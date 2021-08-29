import { useState } from "react";
import { useClient, User } from "../../context/use-client";
import * as S from "./styles";
import { ArrowIosBack, ArrowIosForward } from "@styled-icons/evaicons-solid";
import Link from "next/link";

function Pagination() {
  const { users, currentPage, setCurrentPage } = useClient();
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const userData = (data: User[]) => {
    return (
      <S.DataContainer>
        {data.map((user, index) => {
          return (
            <S.MemberInfo key={index}>
              <img src={user.picture.medium} alt="avatar" />
              <S.MemberName>
                <Link href={`/member/${user.name.first}-${user.name.last}`}>
                  <a>
                    <h1>{user.name.first}</h1>
                    <h1>{user.name.last}</h1>
                  </a>
                </Link>
              </S.MemberName>
              <h2>{user.email}</h2>
              <h3>{user.location.city}</h3>
            </S.MemberInfo>
          );
        })}
      </S.DataContainer>
    );
  };

  const [itemsPerPage] = useState(9);

  const pages = [];
  for (let i = 1; i <= Math.ceil(users.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map((pageNumber) => {
    // qual e o tamanho do array
    // qual e o index atual
    //  total(20) - 17  = 3
    //  total(20) - 19 = 1
    // <= 3 ? resultado : 3
    if (
      pageNumber < maxPageNumberLimit + 1 &&
      pageNumber > minPageNumberLimit
    ) {
      return (
        <li
          className={currentPage == pageNumber ? "active" : null}
          key={pageNumber}
          id={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </li>
      );
    } else {
      return null;
    }
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  let pageIncrementButton = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementButton = <li onClick={handleNextButton}> &hellip; </li>;
  }
  let pageDecrementButton = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementButton = <li onClick={handlePrevButton}> &hellip; </li>;
  }

  return (
    <S.Wrapper>
      <S.UserContainer>{userData(currentItems)}</S.UserContainer>
      <S.Controls className="pageNumbers">
        <S.PrevButton>
          <button onClick={handlePrevButton} disabled={currentPage === 1}>
            <ArrowIosBack size={22} />
          </button>
        </S.PrevButton>

        {pageDecrementButton}
        {renderPageNumbers}
        {pageIncrementButton}

        <S.NextButton>
          <button
            onClick={handleNextButton}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            <ArrowIosForward size={22} />
          </button>
        </S.NextButton>
      </S.Controls>
    </S.Wrapper>
  );
}

export default Pagination;
