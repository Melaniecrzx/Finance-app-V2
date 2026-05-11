import Modal from '../ui/Modal';
import Button from '../ui/Button';
import type { Budget } from '../../types';
import { useDeleteBudget } from '../../hooks/useBudgets';

interface DeleteBudgetModalProps {
  deleteBudgetOpen: boolean;
  setDeleteBudgetOpen: (value: boolean) => void;
  budget: Budget;
}

export default function DeleteBudgetModal({
  deleteBudgetOpen,
  setDeleteBudgetOpen,
  budget,
}: DeleteBudgetModalProps) {
  const { mutate: deleteBudget } = useDeleteBudget();

  return (
    <Modal
      isOpen={deleteBudgetOpen}
      onClose={() => setDeleteBudgetOpen(false)}
      title={`Delete '${budget.category}'`}
    >
      <div className="flex flex-col gap-6">
        <p className="font4-regular text-grey-500">
          Are you sure you want to delete this budget? This action cannot be
          reversed, and all the data inside it will be removed forever.
        </p>
        <Button
          mode="destroy"
          onClick={() => {
            deleteBudget(budget._id);
            setDeleteBudgetOpen(false);
          }}
        >
          Yes, Confirm Deletion
        </Button>
        <button
          className="font4-regular text-grey-500"
          onClick={() => setDeleteBudgetOpen(false)}
        >
          No, Go Back
        </button>
      </div>
    </Modal>
  );
}
