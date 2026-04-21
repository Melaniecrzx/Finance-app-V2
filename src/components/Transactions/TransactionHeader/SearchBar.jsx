import IconSearch from '../../Icon/IconSearch';

export default function SearchBar({ searchInput, setSearchInput, setPage }) {
  return (
    <div className="border flex justify-between items-center border-beige-500 py-3 px-5 rounded-lg w-53.75 md:w-40.25 lg:w-[320px] overflow-hidden">
      <input
        value={searchInput}
        onChange={(e) => {
          setPage(1);
          setSearchInput(e.target.value);
        }}
        className="outline-none font4-regular"
        placeholder="Search transaction"
        id="searchTransaction"
      />
      <button>
        <IconSearch />
      </button>
    </div>
  );
}
