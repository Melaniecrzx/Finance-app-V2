import { useState } from 'react';
import TransactionHeader from '../components/Transactions/TransactionHeader/TransactionHeader';
import TransactionTable from '../components/Transactions/TransactionTable/TransactionTable';
import TransactionPagination from '../components/Transactions/TransactionPagination';
import { useTransactions } from '../hooks/useTransactions';
import { useDebounce } from '../hooks/useDebounce';
import type { FilterCategory, SortOption } from '../types/index';

export default function TransactionPage() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [sort, setSort] = useState<SortOption>('latest');
  const [category, setCategory] = useState<FilterCategory>('all');
  const [page, setPage] = useState<number>(1);

  const debouncedSearch = useDebounce(searchInput, 500);

  const { data, isLoading } = useTransactions({
    page,
    sort,
    category,
    search: debouncedSearch,
  });

  const transactions = data?.data?.transactions ?? [];
  const total = data?.total ?? 0;
  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="py-8 mb-10 px-4 md:px-10 flex flex-col gap-8 overflow-hidden">
      <h1 className="font1 text-grey-900">Transactions</h1>
      <section className="bg-white rounded-xl py-6 px-5 md:p-8 flex flex-col gap-6">
        <TransactionHeader
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onSort={setSort}
          sort={sort}
          category={category}
          onCategory={setCategory}
          setPage={setPage}
        />
        <TransactionTable transactions={transactions} />
        <TransactionPagination total={total} page={page} setPage={setPage} />
      </section>
    </main>
  );
}
