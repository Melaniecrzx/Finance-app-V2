import { useState } from 'react';
import PotsCard from '../components/Pots/PotsCard';
import Button from '../components/ui/Button';
import AddNewPot from '../components/Pots/AddNewPot';
import EmptyState from '../components/ui/EmptyState';
import { usePots } from '../hooks/usePots';

export default function PotsPage() {
  const [addNewPotOpen, setAddNewPotOpen] = useState(false);

  const { data: pots = [] } = usePots();

  return (
    <main className="py-8 px-4 mb-10 md:px-10 flex flex-col gap-8 overflow-hidden">
      <div className="flex justify-between items-center">
        <h1 className="font1 text-grey-900">Pots</h1>
        <Button onClick={() => setAddNewPotOpen(true)} mode="primary">
          + Add New Pot
        </Button>
      </div>
      {pots.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {pots.map((pot) => (
            <PotsCard key={pot._id} pot={pot} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center h-screen items-center flex-1">
          <EmptyState
            emoji="🐖"
            title="No pots found"
            description="Start your saving journey by creating your first pot!"
            buttonLabel="+ Add New Pot"
            onClick={() => setAddNewPotOpen(true)}
          />
        </div>
      )}

      <AddNewPot
        addNewPotOpen={addNewPotOpen}
        setAddNewPotOpen={setAddNewPotOpen}
      />
    </main>
  );
}
