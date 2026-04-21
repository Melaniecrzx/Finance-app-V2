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
import { usePots } from '../../context/PotsContext';

const themes = [
  { id: 1, name: 'Green', color: '#277C78' },
  { id: 2, name: 'Yellow', color: '#F2CDAC' },
  { id: 3, name: 'Cyan', color: '#82C9D7' },
  { id: 4, name: 'Navy', color: '#626070' },
  { id: 5, name: 'Red', color: '#C94736' },
  { id: 6, name: 'Purple', color: '#826CB0' },
];

export default function AddNewPot({ addNewPotOpen, setAddNewPotOpen }) {
  const [form, setForm] = useState({ name: '', target: '' });
  const { addPot } = usePots();

  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  const charsLeft = 30 - form.name?.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPot = {
      id: Date.now(),
      name: form.name,
      target: Number(form.target),
      total: 0,
      theme: selectedTheme.color,
    };
    addPot(newPot);
    setForm({ name: '', target: '' });
    setSelectedTheme(themes[0]);
    setAddNewPotOpen(false);
  };

  return (
    <Modal
      isOpen={addNewPotOpen}
      onClose={() => setAddNewPotOpen(false)}
      title="Add New Pot"
    >
      <div className="flex flex-col gap-6">
        <p className="font4-regular text-grey-500">
          Create a pot to set savings targets. These can help keep you on track
          as you save for special purchases.
        </p>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="potName" className="font5-bold text-grey-500">
              Pot Name
            </label>
            <div className="border border-beige-500 rounded-lg py-3 px-5">
              <input
                id="potName"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                disabled={form.name?.length === 30}
                className="outline-none"
              />
            </div>
            <span className="font5-regular text-grey-500">
              {charsLeft} characters left
            </span>
          </div>
          <div>
            <label htmlFor="target" className="font5-bold text-grey-500">
              Target
            </label>
            <div className="border border-beige-500 rounded-lg py-3 px-5">
              <span className="text-beige-500 font-4-regular">$</span>
              <input
                id="target"
                type="number"
                value={form.target}
                onChange={(e) => setForm({ ...form, target: e.target.value })}
                required
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
          <Button mode="primary" type="submit" className="w-full">
            Add Pot
          </Button>
        </form>
      </div>
    </Modal>
  );
}
