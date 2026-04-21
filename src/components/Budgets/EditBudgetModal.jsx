import { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import IconDown from '../../assets/images/icon-caret-down.svg';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { mockBudgets } from '../../api/api';

export default function EditBudgetModal({
  editBudgetOpen,
  setEditBudgetOpen,
  budget,
  onEdit,
}) {
  const [form, setForm] = useState({
    maximum: budget.maximum,
  });
  const themes = [
    { id: 1, name: 'Green', color: '#277C78' },
    { id: 2, name: 'Yellow', color: '#F2CDAC' },
    { id: 3, name: 'Cyan', color: '#82C9D7' },
    { id: 4, name: 'Navy', color: '#626070' },
    { id: 5, name: 'Red', color: '#C94736' },
    { id: 6, name: 'Purple', color: '#826CB0' },
  ];
  const categories = mockBudgets.map((b) => b.category);

  const [selectedCategory, setSelectedCategory] = useState(
    categories.find((c) => c === budget.category) ?? categories[0],
  );

  const [selectedTheme, setSelectedTheme] = useState(
    themes.find((t) => t.color === budget.theme) ?? themes[0],
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const editBudget = {
      id: budget.id,
      category: selectedCategory,
      maximum: form.maximum,
      theme: selectedTheme.color,
    };
    onEdit(editBudget);
    setForm({ maximum: '' });
    setSelectedCategory(categories[0]);
    setSelectedTheme(themes[0]);
    setEditBudgetOpen(false);
  };

  return (
    <Modal
      isOpen={editBudgetOpen}
      onClose={() => setEditBudgetOpen(false)}
      title="Edit Budget"
    >
      <div className="flex flex-col gap-5">
        <p className="font4-regular text-grey-500">
          As your budgets change, feel free to update your spending limits.{' '}
        </p>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Listbox
              value={selectedCategory}
              onChange={(value) => setSelectedCategory(value)}
              className="text-grey-900"
              as="div"
            >
              <label className="font5-bold text-grey-500">
                Budget Category
              </label>
              <ListboxButton className="border flex justify-between cursor-pointer items-center py-3 px-5 border-beige-500 w-full rounded-lg text-left">
                <div className="flex gap-2 items-center">
                  {selectedCategory}
                </div>
                <img src={IconDown} alt="icon down" />
              </ListboxButton>
              <ListboxOptions className="bg-white  rounded-lg border border-beige-500 mt-1 w-(--button-width) overflow-hidden">
                {categories.map((c) => (
                  <ListboxOption
                    key={c}
                    value={c}
                    className="bg-white cursor-pointer  flex gap-2 items-center  w-full py-3  px-5 text-left data-focus:bg-beige-50"
                  >
                    {c}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
            <div>
              <label htmlFor="target" className="font5-bold text-grey-500">
                Maximum Spend
              </label>
              <div className="border border-beige-500 rounded-lg py-3 px-5 flex items-center gap-3">
                <span className="text-beige-500 font-4-regular">$</span>
                <input
                  id="maximum"
                  value={form.maximum}
                  onChange={(e) =>
                    setForm({ ...form, maximum: e.target.value })
                  }
                  className="outline-none"
                />
              </div>
            </div>
            <Listbox
              value={selectedTheme}
              onChange={(value) => setSelectedTheme(value)}
              className="text-grey-900"
              as="div"
            >
              <label className="font5-bold text-grey-500">Theme</label>
              <ListboxButton className="border flex justify-between cursor-pointer items-center py-3 px-5 border-beige-500 w-full rounded-lg text-left">
                <div className="flex gap-2 items-center">
                  <div
                    className="rounded-full h-4 w-4"
                    style={{ backgroundColor: selectedTheme.color }}
                  ></div>{' '}
                  {selectedTheme.name}
                </div>
                <img src={IconDown} alt="icon down" />
              </ListboxButton>
              <ListboxOptions className="bg-white  rounded-lg border border-beige-500 mt-1 w-(--button-width) overflow-hidden">
                {themes.map((theme) => (
                  <ListboxOption
                    key={theme.id}
                    value={theme}
                    className="bg-white cursor-pointer  flex gap-2 items-center  w-full py-3  px-5 text-left data-focus:bg-beige-50"
                  >
                    <div
                      className="rounded-full h-4 w-4"
                      style={{ backgroundColor: theme.color }}
                    ></div>{' '}
                    {theme.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </div>

          <Button mode="primary" type="submit" className="w-full">
            Save Changes
          </Button>
        </form>
      </div>
    </Modal>
  );
}
