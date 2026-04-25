import { useState } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import type { Pot } from "../../types";
import { useAppDispatch } from "../../app/hooks";
import { addMoney } from "../../features/pot/potSlice";

interface AddToPotModalProps {
  addToPotOpen: boolean;
  setAddToPotOpen: (value: boolean) => void;
  pot: Pot;
}

export default function AddToPotModal({
  addToPotOpen,
  setAddToPotOpen,
  pot,
}: AddToPotModalProps) {
  const [amountToAdd, setAmountToAdd] = useState("");
  const newAmount = pot.total + Number(amountToAdd);
  const pourcentage =
    pot.target === 0
      ? "0.0"
      : (Math.floor((pot.total / Number(pot.target)) * 1000) / 10).toFixed(1);

  const newPourcentage =
    pot.target === 0
      ? 0
      : Math.floor((Number(amountToAdd) / Number(pot.target)) * 100);

  const totalPourcentage =
    pot.target === 0
      ? "0.00"
      : (Number(pourcentage) + newPourcentage).toFixed(2);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (amountToAdd.trim() === "") return;
    dispatch(addMoney({ id: pot.id, amount: Number(amountToAdd) }));
    setAmountToAdd("");
    setAddToPotOpen(false);
  };

  return (
    <Modal
      isOpen={addToPotOpen}
      onClose={() => setAddToPotOpen(false)}
      title={`Add to '${pot.name}'`}
    >
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="font4-regular text-grey-500">New Amount</span>
          <span className="font1 text-grey-900">${newAmount}</span>
        </div>
        <div className="bg-beige-50 h-2 w-full rounded-sm flex gap-0.5">
          <div
            className="h-full rounded-l-sm bg-grey-900"
            style={{
              width: `${pourcentage}%`,
            }}
          ></div>
          <div
            className="h-full rounded-r-sm"
            style={{ width: `${newPourcentage}%`, backgroundColor: pot.theme }}
          ></div>
        </div>
        <div className="flex justify-between">
          <span className="font5-bold" style={{ color: pot.theme }}>
            {totalPourcentage}%
          </span>
          <span className="font5-regular text-grey-500">
            Target of ${pot.target}
          </span>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="amountToAdd" className="font5-bold text-grey-500">
              Amount to Add
            </label>
            <div className="w-full border border-beige-500 px-5 py-3 rounded-lg flex items-center gap-4">
              <span className="text-beige-500">$</span>
              <input
                value={amountToAdd}
                onChange={(e) => setAmountToAdd(e.target.value)}
                id="amountToAdd"
                type="text"
                className="outline-none w-full"
              />
            </div>
          </div>
          <Button mode="primary" type="submit" className="w-full">
            Confirm Addition
          </Button>
        </form>
      </div>
    </Modal>
  );
}
