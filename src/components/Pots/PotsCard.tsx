import { useState } from "react";
import AddToPotModal from "./AddToPotModal.tsx";
import WithdrawPotModal from "./WithdrawPotModal.tsx";
import Button from "../ui/Button";
import IconEllipsis from "../Icon/IconEllipsis.tsx";
import MenuDropdown from "../ui/MenuDropdown.tsx";
import EditPotModal from "./EditPotModal.tsx";
import DeletePotModal from "./DeletePotModal.tsx";
import type { Pot, DropdownLink } from "../../types";

interface PotsCardProps {
  pot: Pot;
}

export default function PotsCard({ pot }: PotsCardProps) {
  const [addToPotOpen, setAddToPotOpen] = useState(false);
  const [editPotOpen, setEditPotOpen] = useState(false);
  const [deletePotOpen, setDeletePotOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [total, setTotal] = useState(pot.total);
  const links: DropdownLink[] = [
    {
      id: 1,
      onClick: () => setEditPotOpen(true),
      label: "Edit Pot",
      className: "text-grey-900",
    },
    {
      id: 2,
      onClick: () => setDeletePotOpen(true),
      label: "Delete Pot",
      className: "text-red",
    },
  ];

  const pourcentage =
    pot.target === 0
      ? "0.0"
      : (Math.floor((total / Number(pot.target)) * 1000) / 10).toFixed(1);
  return (
    <div className="bg-white p-6 rounded-xl w-full flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div
            className="rounded-full h-4 w-4"
            style={{ backgroundColor: pot.theme }}
          ></div>
          <h2 className="font2 text-grey-900">{pot.name}</h2>
        </div>
        <MenuDropdown button={<IconEllipsis />} links={links} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="font4-regular text-grey-500">Total Saved</p>
          <span className="text-grey-900 font1">${total.toFixed(2)}</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="h-2 w-full bg-beige-50 rounded-sm ">
            <div
              className="h-full rounded-sm"
              style={{ width: `${pourcentage}%`, backgroundColor: pot.theme }}
            ></div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font5-bold text-grey-500">{pourcentage}%</span>
            <span className="font5-regular text-grey-500">
              Target of ${pot.target}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-2">
        <Button className="flex-1" onClick={() => setAddToPotOpen(true)}>
          + Add Money
        </Button>
        <Button className="flex-1" onClick={() => setWithdrawOpen(true)}>
          Withdraw
        </Button>
      </div>
      <AddToPotModal
        addToPotOpen={addToPotOpen}
        setAddToPotOpen={setAddToPotOpen}
        pot={pot}
        total={total}
        setTotal={setTotal}
      />
      <WithdrawPotModal
        withdrawOpen={withdrawOpen}
        setWithdrawOpen={setWithdrawOpen}
        pot={pot}
        total={total}
        setTotal={setTotal}
      />
      <EditPotModal
        editPotOpen={editPotOpen}
        setEditPotOpen={setEditPotOpen}
        pot={pot}
      />
      <DeletePotModal
        deletePotOpen={deletePotOpen}
        setDeletePotOpen={setDeletePotOpen}
        pot={pot}
      />
    </div>
  );
}
