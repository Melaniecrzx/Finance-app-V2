import IconEllipsis from '../Icon/IconEllipsis';
import IconChevronRight from '../Icon/IconChevronRight';
import MenuDropdown from '../ui/MenuDropdown';
import { mockTransactions } from '../../api/api';
import { useState } from 'react';
import EditBudgetModal from './EditBudgetModal';
import DeleteBudgetModal from './DeleteBudgetModal';

export default function BudgetCard({ budget, stats, onEdit, onDelete }) {
  const [editBudgetOpen, setEditBudgetOpen] = useState(false);
  const [deleteBudgetOpen, setDeleteBudgetOpen] = useState(false);

  const {
    spentBudget,
    spentBudgetPercentage,
    remainingBudget,
    latestSpending,
  } = stats;

  const links = [
    {
      id: 1,
      onClick: () => setEditBudgetOpen(true),
      label: 'Edit Budget',
      className: 'text-grey-900',
    },
    {
      id: 2,
      onClick: () => setDeleteBudgetOpen(true),
      label: 'Delete Budget',
      className: 'text-red',
    },
  ];

  return (
    <section className="bg-white rounded-xl px-5 py-6 md:p-8 w-full flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div
            className="rounded-full w-4 h-4"
            style={{ backgroundColor: budget.theme }}
          ></div>
          <h2 className="font2 text-grey-900">{budget.category}</h2>
        </div>
        <MenuDropdown button={<IconEllipsis />} links={links} />
      </div>
      <div className="flex flex-col gap-4">
        <span className="font4-regular text-grey-500">
          Maximum of ${budget.maximum.toFixed(2)}
        </span>
        <div className="bg-beige-50 w-full h-8 rounded-sm flex items-center px-1">
          <div
            className="h-6 rounded-sm"
            style={{
              width: `${spentBudgetPercentage}%`,
              backgroundColor: budget.theme,
            }}
          ></div>
        </div>
        <div className="flex justify-around">
          <div className="flex gap-2 items-start">
            <div
              className="h-10.75 w-1 rounded-lg"
              style={{ backgroundColor: budget.theme }}
            ></div>
            <div className="flex flex-col gap-2">
              <span className="font5-regular text-grey-500">Spent</span>
              <span className="text-grey-900 font4-bold">
                ${spentBudget.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <div className="h-10.75 w-1 rounded-lg bg-beige-50"></div>
            <div className="flex flex-col gap-2">
              <span className="font5-regular text-grey-500">Remaining</span>
              <span className="text-grey-900 font4-bold">
                ${remainingBudget}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-beige-50 p-5 rounded-xl">
          <div className="flex justify-between items-center">
            <span className="font3 text-grey-900">Latest Spending</span>
            <button className="font4-regular items-center flex gap-3 text-grey-500 cursor-pointer">
              See all
              <IconChevronRight className="w-3 h-3" />
            </button>
          </div>
          {latestSpending.slice(0, 3).map((l) => (
            <div
              key={l.id}
              className="border-b border-grey-300 last:border-none flex items-center justify-between py-3"
            >
              <div className="flex items-center gap-4">
                <img
                  src={l.avatar}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-grey-900 font5-bold">{l.name}</span>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <span className="font5-bold text-grey-900">
                  -${Math.abs(l.amount).toFixed(2)}
                </span>
                <span className="font5-regular text-grey-500">
                  {new Date(l.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>{' '}
              </div>
            </div>
          ))}
        </div>
      </div>
      <EditBudgetModal
        editBudgetOpen={editBudgetOpen}
        setEditBudgetOpen={setEditBudgetOpen}
        budget={budget}
        onEdit={onEdit}
      />
      <DeleteBudgetModal
        deleteBudgetOpen={deleteBudgetOpen}
        setDeleteBudgetOpen={setDeleteBudgetOpen}
        budget={budget}
        onDelete={onDelete}
      />
    </section>
  );
}
