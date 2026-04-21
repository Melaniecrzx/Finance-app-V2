import { useState } from 'react';
import iconCaretDown from '../../../assets/images/icon-caret-down.svg';
import IconSort from '../../../assets/images/icon-sort-mobile.svg';

export default function SortFilter({ value, onChange }) {
  const options = [
    { id: 1, value: 'latest', label: 'Latest' },
    { id: 2, value: 'oldest', label: 'Oldest' },
    { id: 3, value: 'a-z', label: 'A to Z' },
    { id: 4, value: 'z-a', label: 'Z to A' },
    { id: 5, value: 'highest', label: 'Highest' },
    { id: 6, value: 'lowest', label: 'Lowest' },
  ];
  const selected = options.find((o) => o.value === value);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-2 items-center relative">
      <span className="font4-regular hidden md:block text-grey-500">
        Sort By
      </span>
      <button
        className="cursor-pointer md:border border-beige-500 rounded-lg md:px-5 md:py-3"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="gap-4 hidden md:flex font4-regular text-grey-900">
          {selected?.label}
          <img src={iconCaretDown} alt="" />
        </div>
        <img
          src={IconSort}
          alt="Icon Sort"
          className="w-5 h-5 min-w-5 min-h-5 block md:hidden"
        />
      </button>
      {isOpen && (
        <ul className="absolute top-full flex flex-col  right-0 bg-white shadow-md rounded-lg z-10 min-w-40">
          {options.map((option) => (
            <li
              key={option.id}
              className="border-b hover:bg-beige-50 p-4 text-grey-900 border-grey-100 font4-regular last:border-none"
            >
              <button
                className="cursor-pointer"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
