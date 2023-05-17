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
    <nav>
      <button
        onClick={onPreviusPage}
        disabled={currentPage === 1 ? true : false}
      >
        Anterior
      </button>
      {pageNumbers.map((numPage) => (
        <button
          onClick={() => onSpecificPage(numPage)}
          style={numPage === currentPage ? { backgroundColor: "#00B1E1" } : {}}
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
