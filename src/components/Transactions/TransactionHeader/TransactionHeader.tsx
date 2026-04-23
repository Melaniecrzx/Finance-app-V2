import SearchBar from "../../ui/SearchBar";
import SortFilter from "../../ui/SortFilter";
import CategoryFilter from "./CategoryFilter";
import type { FilterCategory, SortOption } from "../../../types";

interface TransactionHeaderProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  sort: SortOption;
  onSort: (value: SortOption) => void;
  category: FilterCategory;
  onCategory: (value: FilterCategory) => void;
  setPage: (value: number) => void;
}

export default function TransactionHeader({
  searchInput,
  setSearchInput,
  sort,
  onSort,
  category,
  onCategory,
  setPage,
}: TransactionHeaderProps) {
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
