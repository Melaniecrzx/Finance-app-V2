import { NavLink } from "react-router-dom";
import iconOverview from "../assets/images/icon-nav-overview.svg";
import iconBudgets from "../assets/images/icon-nav-budgets.svg";
import iconPots from "../assets/images/icon-nav-pots.svg";
import iconBills from "../assets/images/icon-nav-recurring-bills.svg";
import IconReceipt from "../components/Icon/IconReceipt";

interface NavPage {
  id: number;
  name: string;
  icon: React.ReactNode;
  to: string;
}

export default function NavBar() {
  const pages: NavPage[] = [
    {
      id: 1,
      name: "Overview",
      icon: <img src={iconOverview} alt="" className="h-6 w-6" />,
      to: "/",
    },
    {
      id: 2,
      name: "Transactions",
      icon: <IconReceipt color="#B3B3B3" size={24} />,
      to: "/transactions",
    },
    {
      id: 3,
      name: "Budgets",
      icon: <img src={iconBudgets} alt="" className="h-6 w-6" />,
      to: "/budgets",
    },
    {
      id: 4,
      name: "Pots",
      icon: <img src={iconPots} alt="" className="h-6 w-6" />,
      to: "/pots",
    },
    {
      id: 5,
      name: "Recurring Bills",
      icon: <img src={iconBills} alt="" className="h-6 w-6" />,
      to: "/bills",
    },
  ];

  return (
    <nav className="fixed bottom-0 lg:hidden bg-grey-900 w-full h-20 rounded-t-xl px-4 md:px-10 pt-2 z-50 ">
      <ul className="flex justify-evenly ">
        {pages.map((p) => (
          <li key={p.id} className="px-5.5 md:px-6 py-4">
            <NavLink to={p.to} className="flex flex-col gap-3 items-center">
              {p.icon}{" "}
              <span className="hidden md:block text-grey-300 font5-bold">
                {p.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
