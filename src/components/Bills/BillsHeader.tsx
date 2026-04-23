import SearchBar from "../ui/SearchBar";
import SortFilter from "../ui/SortFilter";
import type { SortOption } from "../../types";

interface BillsHeaderProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  sort: SortOption;
  onSort: (value: SortOption) => void;
}

export default function BillsHeader({
  searchInput,
  setSearchInput,
  onSort,
  sort,
}: BillsHeaderProps) {
  return (
    <section className="flex justify-between">
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <SortFilter value={sort} onChange={onSort} />
    </section>
  );
}
