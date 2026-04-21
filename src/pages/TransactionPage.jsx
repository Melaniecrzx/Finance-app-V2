import { useState } from 'react';
import TransactionHeader from '../components/Transactions/TransactionHeader/TransactionHeader';
import TransactionTable from '../components/Transactions/TransactionTable/TransactionTable';
import TransactionPagination from '../components/Transactions/TransactionPagination';
import { mockTransactions } from '../api/api';

export default function TransactionPage() {
  const [searchInput, setSearchInput] = useState('');
  const [sort, setSort] = useState('latest');
  const [category, setCateroy] = useState('all');
  const [page, setPage] = useState(1);

  const filteredAndSorted = [...mockTransactions]
    .filter((m) => m.name.toLowerCase().includes(searchInput.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'latest') return new Date(b.date) - new Date(a.date);
      if (sort === 'oldest') return new Date(a.date) - new Date(b.date);
      if (sort === 'a-z') return a.name.localeCompare(b.name);
      if (sort === 'z-a') return b.name.localeCompare(a.name);
      if (sort === 'highest') return b.amount - a.amount;
      if (sort === 'lowest') return a.amount - b.amount;
    })
    .filter((m) => {
      if (category === 'all') return m;
      if (category === 'entertainement') return m.category === 'Entertainment';
      if (category === 'bills') return m.category === 'Bills';
      if (category === 'groceries') return m.category === 'Groceries';
      if (category === 'dining') return m.category === 'Dining Out';
      if (category === 'transportation') return category === 'Transportation';
      if (category === 'personalCare') return category === 'Personal Care';
    });

  const pagined = filteredAndSorted.slice((page - 1) * 10, page * 10);

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
          onCategory={setCateroy}
          setPage={setPage}
        />
        <TransactionTable transactions={pagined} />
        <TransactionPagination
          total={filteredAndSorted.length}
          page={page}
          setPage={setPage}
        />
      </section>
    </main>
  );
}
