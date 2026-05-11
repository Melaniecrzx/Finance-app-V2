import Modal from '../ui/Modal';
import Button from '../ui/Button';
import type { Pot } from '../../types';
import { useDeletePot } from '../../hooks/usePots';

interface DeletePotModalProps {
  deletePotOpen: boolean;
  setDeletePotOpen: (value: boolean) => void;
  pot: Pot;
}

export default function DeletePotModal({
  deletePotOpen,
  setDeletePotOpen,
  pot,
}: DeletePotModalProps) {
  const { mutate: deletePot } = useDeletePot();

  return (
    <Modal
      isOpen={deletePotOpen}
      onClose={() => setDeletePotOpen(false)}
      title={`Delete '${pot.name}'`}
    >
      <div className="flex flex-col gap-6">
        <p className="font4-regular text-grey-500">
          Are you sure you want to delete this pot? This action cannot be
          reversed, and all the data inside it will be removed forever.
        </p>
        <Button
          mode="destroy"
          onClick={() => {
            deletePot(pot._id);
            setDeletePotOpen(false);
          }}
        >
          Yes, Confirm Deletion
        </Button>
        <button
          className="font4-regular text-grey-500"
          onClick={() => setDeletePotOpen(false)}
        >
          No, Go Back
        </button>
      </div>
    </Modal>
  );
}
