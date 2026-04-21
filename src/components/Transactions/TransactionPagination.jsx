import IconChrevonLeft from '../Icon/IconChrevonLeft';
import IconChevronRight from '../Icon/IconChevronRight';

export default function TransactionPagination({ total, page, setPage }) {
  const totalPages = Math.ceil(total / 10);

  return (
    <div className="flex justify-evenly items-center font4-regular text-grey-900">
      <button
        className="flex gap-4 cursor-pointer items-center border border-beige-500 rounded-lg px-3 py-2.5 transition ease-in-out duration-150 hover:bg-grey-900 hover:text-white disabled:bg-beige-50 disabled:text-grey-900"
        disabled={page === 1}
        onClick={() => setPage((prev) => prev - 1)}
      >
        <IconChrevonLeft />
        Prev
      </button>
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`border border-beige-500 cursor-pointer rounded-lg px-3 py-2.5 w-10 h-10 ${p === page ? 'bg-grey-900 text-white' : ''}`}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        className="flex gap-4 cursor-pointer items-center border border-beige-500 rounded-lg px-3 py-2.5 transition ease-in-out duration-150 hover:bg-grey-900 hover:text-white disabled:bg-beige-50 disabled:text-grey-900"
        disabled={page * 10 >= total}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
        <IconChevronRight />
      </button>
    </div>
  );
}
