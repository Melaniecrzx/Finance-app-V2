export default function SummaryCard({ title, amount, mode }) {
  return (
    <section
      className={`rounded-xl p-5 md:p-6 w-full flex flex-col gap-3 ${mode === 'dark' ? 'bg-black' : 'bg-white'}`}
    >
      <span
        className={`font4-regular ${mode === 'dark' ? 'text-white' : 'text-grey-500'}`}
      >
        {title}
      </span>
      <span
        className={`font1 ${mode === 'dark' ? 'text-white' : 'text-grey-900'}`}
      >
        ${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
      </span>
    </section>
  );
}
