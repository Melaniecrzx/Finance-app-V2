import { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

export default function WithdrawPotModal({
  withdrawOpen,
  setWithdrawOpen,
  pot,
  total,
  setTotal,
}) {
  const [amountToWithdraw, setAmountToWithdraw] = useState('');
  const [error, setError] = useState('');
  const newAmount = total - Number(amountToWithdraw);
  const pourcentage = (Math.floor((total / pot.target) * 1000) / 10).toFixed(1);
  const newPourcentage = Math.floor(
    (Number(amountToWithdraw) / pot.target) * 100,
  );
  const totalPourcentage = (Number(pourcentage) - newPourcentage).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amountToWithdraw.trim() === '') return;
    if (Number(amountToWithdraw) > total) {
      return;
    }
    setError('');
    setTotal(total - Number(amountToWithdraw));
    setAmountToWithdraw('');
    setWithdrawOpen(false);
  };

  console.log(error);
  return (
    <Modal
      isOpen={withdrawOpen}
      onClose={() => setWithdrawOpen(false)}
      title={`Withdraw from '${pot.name}'`}
    >
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="font4-regular text-grey-500">New Amount</span>
          <span className="font1 text-grey-900">${newAmount.toFixed(2)}</span>
        </div>
        <div className="bg-beige-50 h-2 w-full rounded-sm flex gap-0.5">
          <div
            className="h-full rounded-l-sm bg-grey-900"
            style={{
              width: `${totalPourcentage}%`,
            }}
          ></div>
          <div
            className="h-full rounded-r-sm"
            style={{ width: `${newPourcentage}%`, backgroundColor: '#c94736' }}
          ></div>
        </div>
        <div className="flex justify-between">
          <span className="font5-bold text-red">{totalPourcentage}%</span>
          <span className="font5-regular text-grey-500">
            Target of ${pot.target}
          </span>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="amountToAdd" className="font5-bold text-grey-500">
              Amount to Withdraw
            </label>
            <div className="w-full border border-beige-500 px-5 py-3 rounded-lg flex items-center gap-4">
              <span className="text-beige-500">$</span>
              <input
                value={amountToWithdraw}
                onChange={(e) => {
                  setAmountToWithdraw(e.target.value);
                  if (Number(e.target.value) > total) {
                    setError('Amount exceeds total saved');
                  } else {
                    setError('');
                  }
                }}
                id="amountToAdd"
                type="text"
                className="outline-none w-full"
              />
            </div>
          </div>
          {error && <span className="font5-regular text-red">{error}</span>}

          <Button mode="primary" type="submit" className="w-full">
            Confirm Withdrawal
          </Button>
        </form>
      </div>
    </Modal>
  );
}
