import styles from "./Pagination.module.css";

function Pagination({ dogsPerPage, currentPage, setCurrentPage, totalDogs }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <nav className={styles.paginationNav}>
      <button
        onClick={onPreviusPage}
        disabled={currentPage === 1 ? true : false}
      >
        Anterior
      </button>
      {pageNumbers.map((numPage) => (
        <button
          className={
            numPage === currentPage ? styles.bntPageSelected : undefined
          }
          onClick={() => onSpecificPage(numPage)}
          key={numPage}
        >
          {numPage}
        </button>
      ))}
      <button
        onClick={onNextPage}
        disabled={currentPage >= pageNumbers.length ? true : false}
      >
        Siguiente
      </button>
    </nav>
  );
}

export default Pagination;
