import { useState } from 'react';
import iconCaretDown from '../../../assets/images/icon-caret-down.svg';
import iconFilter from '../../../assets/images/icon-filter-mobile.svg';

export default function CategoryFilter({ value, onChange }) {
  const category = [
    { id: 1, value: 'all', label: 'All Transactions' },
    { id: 2, value: 'entertainement', label: 'Entertainment' },
    { id: 3, value: 'bills', label: 'Bills' },
    { id: 4, value: 'groceries', label: 'Groceries' },
    { id: 5, value: 'dining', label: 'Dining Out' },
    { id: 6, value: 'transportation', label: 'Transportation' },
    { id: 7, value: 'personalCare', label: 'Personal Care' },
  ];

  const selected = category.find((c) => c.value === value);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-2 items-center relative">
      <span className="hidden md:block font4-regular text-grey-500">
        Category
      </span>

      <button
        className="cursor-pointer md:border border-beige-500 rounded-lg md:px-5 md:py-3"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="hidden md:flex gap-4 font4-regular text-grey-900">
          {selected?.label}
          <img src={iconCaretDown} alt="" />
        </div>
        <img
          src={iconFilter}
          alt="Icon Filter"
          className="w-5 h-5 min-w-5 min-h-5 block md:hidden"
        />
      </button>
      {isOpen && (
        <ul className="absolute top-full  flex flex-col  right-0 bg-white shadow-md rounded-lg z-10 min-w-40">
          {category.map((c) => (
            <li
              key={c.id}
              className="border-b hover:bg-beige-50 p-4 text-grey-900 border-grey-100 font4-regular last:border-none"
            >
              <button
                className="cursor-pointer"
                onClick={() => {
                  onChange(c.value);
                  setIsOpen(false);
                }}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
