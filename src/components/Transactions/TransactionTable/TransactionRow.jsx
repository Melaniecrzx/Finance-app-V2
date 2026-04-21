export default function TransactionRow({ values }) {
  return (
    <tr className="border-b border-grey-100">
      <td className="text-grey-900 font4-bold text-left py-3 flex items-center gap-4">
        <img
          src={values.avatar}
          className="h-10 w-10 rounded-full shrink-0"
          alt="avatar transaction"
        />
        <div className="flex flex-col">
          <span>{values.name}</span>
          <span className="text-grey-500 font5-regular md:hidden">
            {values.category}
          </span>
        </div>
      </td>
      <td className="text-grey-500 font5-regular text-left hidden md:table-cell">
        {values.category}
      </td>
      <td className="text-grey-500 font5-regular text-left hidden md:table-cell">
        {new Date(`${values.date}`).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}
      </td>
      <td
        className={`font4-bold text-right ${values.amount < 0 ? 'text-grey-900' : 'text-green'}`}
      >
        <div className="flex flex-col gap-2">
          <span>
            {values.amount < 0
              ? `-$${(values.amount / -1).toFixed(2)}`
              : `+$${values.amount.toFixed(2)}`}
          </span>
          <span className="text-grey-500 font5-regular md:hidden">
            {new Date(`${values.date}`).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>
      </td>
    </tr>
  );
}
