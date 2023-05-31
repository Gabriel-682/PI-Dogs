import styles from "./Pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions";

function Pagination() {
  const dogsRender = useSelector((state) => state.dogsRender);
  const dogsPerPage = useSelector((state) => state.dogsPerPage);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();
  const totalDogs = dogsRender.length;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviusPage = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const onNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const onSpecificPage = (n) => {
    dispatch(setCurrentPage(n));
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
