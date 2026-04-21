import SearchBar from "../TransactionHeader/SearchBar";
import SortFilter from "./SortFilter";
import CategoryFilter from "./CategoryFilter";

export default function TransactionHeader({
  searchInput,
  setSearchInput,
  sort,
  onSort,
  category,
  onCategory,
  setPage,
}) {
  return (
    <section className="flex justify-between">
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setPage={setPage}
      />
      <div className="flex gap-6 items-center">
        <SortFilter value={sort} onChange={onSort} />
        <CategoryFilter value={category} onChange={onCategory} />
      </div>
    </section>
  );
}
