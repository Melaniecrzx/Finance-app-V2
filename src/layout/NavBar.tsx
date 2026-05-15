import { NavLink } from 'react-router-dom';
import IconOverview from '../components/Icon/IconOverview';
import IconBudget from '../components/Icon/IconBudget';
import IconPot from '../components/Icon/IconPot';
import IconTransaction from '../components/Icon/IconTransaction';
import IconReceipt from '../components/Icon/IconReceipt';
import IconLogout from '../components/Icon/IconLogout';
import { useAuth } from '../context/AuthContext';

interface NavPage {
  id: number;
  name: string;
  icon: (isActive: boolean) => React.ReactNode;
  to: string;
}

export default function NavBar() {
  const { logout } = useAuth();

  const pages: NavPage[] = [
    {
      id: 1,
      name: 'Overview',
      icon: (isActive) => (
        <IconOverview size={24} color={isActive ? '#277c78' : '#B3B3B3'} />
      ),
      to: '/',
    },
    {
      id: 2,
      name: 'Transactions',
      icon: (isActive) => (
        <IconTransaction size={24} color={isActive ? '#277c78' : '#B3B3B3'} />
      ),
      to: '/transactions',
    },
    {
      id: 3,
      name: 'Budgets',
      icon: (isActive) => (
        <IconBudget size={24} color={isActive ? '#277c78' : '#B3B3B3'} />
      ),
      to: '/budgets',
    },
    {
      id: 4,
      name: 'Pots',
      icon: (isActive) => (
        <IconPot size={24} color={isActive ? '#277c78' : '#B3B3B3'} />
      ),
      to: '/pots',
    },
    {
      id: 5,
      name: 'Recurring Bills',
      icon: (isActive) => (
        <IconReceipt size={24} color={isActive ? '#277c78' : '#B3B3B3'} />
      ),
      to: '/bills',
    },
  ];

  return (
    <nav className="fixed bottom-0 lg:hidden bg-grey-900 w-full h-15 rounded-t-xl px-4 md:px-10 z-50">
      <ul className="flex justify-evenly h-full">
        {pages.map((p) => (
          <li key={p.id} className="flex items-end mt-2">
            <NavLink
              to={p.to}
              className={({ isActive }) =>
                `flex items-center px-3 md:px-6 pt-2 md:flex-col h-full gap-1 font3 transition-colors duration-200 ${isActive ? 'bg-white rounded-t-lg border-b-2 border-green' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {p.icon(isActive)}
                  <span
                    className={`hidden md:block font5-bold ${isActive ? 'text-green' : 'text-grey-300'}`}
                  >
                    {p.name}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}
        <li className="flex items-end mt-2">
          <button
            onClick={logout}
            className="flex items-center px-3 md:px-6 pt-2 md:flex-col h-full gap-1 font3 transition-colors duration-200"
          >
            <IconLogout />
            <span className="hidden md:block font5-bold text-grey-300">
              Logout
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
