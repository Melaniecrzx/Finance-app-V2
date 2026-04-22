import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import IconCloseModal from '../Icon/IconCloseModal';

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  isDelete = false,
}) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-h-[90vh] overflow-y-auto w-85.75 md:w-120 flex flex-col gap-6 bg-white dark:bg-grey-2b2 p-8 rounded-2xl">
          <div className="flex justify-between items-center">
            <DialogTitle className="font1 text-grey-900">{title}</DialogTitle>
            <button onClick={onClose}>
              <IconCloseModal />
            </button>
          </div>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
