import { NavLink } from 'react-router-dom';
import logoLarge from '../assets/images/logo-large.svg';
import iconOverview from '../assets/images/icon-nav-overview.svg';
import iconBudgets from '../assets/images/icon-nav-budgets.svg';
import iconPots from '../assets/images/icon-nav-pots.svg';
import iconBills from '../assets/images/icon-nav-recurring-bills.svg';
import IconReceipt from '../components/Icon/IconReceipt';
import IconMinimize from '../components/Icon/IconMinimize';
import { motion } from 'framer-motion';
import { useSideBar } from '../context/SideBarProvider';
import { useState } from 'react';

export default function SideBar() {
  const { isSideBarOpen, setIsSideBarOpen } = useSideBar();

  const pages = [
    {
      id: 1,
      name: 'Overview',
      icon: (isActive) => <img src={iconOverview} alt="" />,
      to: '/',
    },
    {
      id: 2,
      name: 'Transactions',
      icon: (isActive) => (
        <IconReceipt size={24} color={isActive ? '#277c78' : '#B3B3B3'} />
      ),
      to: '/transactions',
    },
    {
      id: 3,
      name: 'Budgets',
      icon: (isActive) => <img src={iconBudgets} alt="" />,
      to: '/budgets',
    },
    {
      id: 4,
      name: 'Pots',
      icon: (isActive) => <img src={iconPots} alt="" />,
      to: '/pots',
    },
    {
      id: 5,
      name: 'Recurring Bills',
      icon: (isActive) => <img src={iconBills} alt="" />,
      to: '/bills',
    },
  ];

  return (
    <motion.aside
      className="hidden lg:flex bg-grey-900 h-screen flex-col justify-between py-10 rounded-r-2xl overflow-hidden shrink-0"
      animate={{
        width: isSideBarOpen ? 300 : 95,
        paddingLeft: isSideBarOpen ? 32 : 24,
        paddingRight: isSideBarOpen ? 32 : 24,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-16">
        <motion.img
          src={logoLarge}
          alt="logo Finance app"
          animate={{ opacity: isSideBarOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-30.5"
        />
        <ul className="flex flex-col gap-8 text-grey-300">
          {pages.map((p) => (
            <motion.li key={p.id}>
              <NavLink
                to={p.to}
                className={({ isActive }) =>
                  `flex gap-4 items-center py-4 font3 ${isSideBarOpen ? 'px-8 -ml-8' : 'justify-center w-full border-none'} ${isActive ? 'bg-white rounded-xl text-grey-900 border-l-4 border-green' : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    {p.icon(isActive)}
                    <motion.span
                      animate={{
                        opacity: isSideBarOpen ? 1 : 0,
                        width: isSideBarOpen ? 'auto' : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden whitespace-nowrap"
                    >
                      {p.name}
                    </motion.span>
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </div>

      <button
        className="flex gap-4 items-center cursor-pointer"
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      >
        <motion.div
          animate={{ rotate: isSideBarOpen ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          <IconMinimize className="text-grey-300" />
        </motion.div>
        <motion.span
          animate={{
            opacity: isSideBarOpen ? 1 : 0,
            width: isSideBarOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.2 }}
          className="text-grey-300 overflow-hidden whitespace-nowrap"
        >
          Minimize Menu
        </motion.span>
      </button>
    </motion.aside>
  );
}
