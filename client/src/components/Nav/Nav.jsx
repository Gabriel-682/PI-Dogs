import SearchBar from "../SearchBar/SearchBar";

function Nav({ setCurrentPage }) {
  return (
    <div>
      <p>SOY LA NAV</p>
      <SearchBar setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Nav;
