import { Nav } from "./styles";
import { ArrowIosBack, ArrowIosForward } from "@styled-icons/evaicons-solid";

const maxItems = 7;
const maxLeft = (maxItems - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset, paginate }) => {
  const currentPage = offset ? offset / limit + 1 : 1;
  console.log(currentPage);

  const pages = Math.ceil(total / limit);

  const maxFirst = Math.max(pages - (maxItems - 1), 1);

  const firstPage = Math.min(Math.max(currentPage - maxLeft, 1), maxFirst);

  function onPageChange(page: number) {
    setOffset((page - 1) * limit);
  }

  return (
    <Nav>
      <ul className="pagination">
        <li className="list">
          <button
            className="pagination__svg"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ArrowIosBack size={22} />
          </button>
        </li>
        {Array.from({ length: Math.min(maxItems, pages) })
          .map((_, index) => index + firstPage)
          .map((page, index) => (
            <li key={page}>
              <a
                className={
                  page === currentPage ? "pagination__item--active" : null
                }
                onClick={() => paginate(page)}
              >
                {page}
              </a>
            </li>
          ))}
        <li>
          <button
            className="pagination__svg"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === pages}
          >
            <ArrowIosForward size={22} />
          </button>
        </li>
      </ul>
    </Nav>
  );
};
export default Pagination;
