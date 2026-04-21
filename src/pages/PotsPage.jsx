import { useState } from 'react';
import PotsCard from '../components/Pots/PotsCard';
import Button from '../components/ui/Button';
import AddNewPot from '../components/Pots/AddNewPot';
import { usePots } from '../context/PotsContext';

export default function PotsPage() {
  const [addNewPotOpen, setAddNewPotOpen] = useState(false);
  const { pots } = usePots();

  return (
    <main className="py-8 px-4 mb-10 md:px-10 flex flex-col gap-8 overflow-hidden">
      <div className="flex justify-between items-center">
        <h1 className="font1 text-grey-900">Pots</h1>
        <Button onClick={() => setAddNewPotOpen(true)} mode="primary">
          + Add New Pot
        </Button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {pots.map((pot) => (
          <PotsCard key={pot.id} pot={pot} />
        ))}
      </div>
      <AddNewPot
        addNewPotOpen={addNewPotOpen}
        setAddNewPotOpen={setAddNewPotOpen}
      />
    </main>
  );
}
