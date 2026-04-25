import { NavLink } from "react-router-dom";
import logoLarge from "../assets/images/logo-large.svg";
import logoSmall from "../assets/images/logo-small.svg";
import IconOverview from "../components/Icon/IconOverview";
import IconBudget from "../components/Icon/IconBudget";
import IconPot from "../components/Icon/IconPot";
import IconTransaction from "../components/Icon/IconTransaction";
import IconReceipt from "../components/Icon/IconReceipt";
import IconMinimize from "../components/Icon/IconMinimize";
import { motion, AnimatePresence } from "framer-motion";
import { sideBarAtom } from "../atoms/atoms";
import { useAtom } from "jotai";

interface SideBarPage {
  id: number;
  name: string;
  icon: (isActive: boolean) => React.ReactNode;
  to: string;
}

export default function SideBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useAtom(sideBarAtom);

  const pages: SideBarPage[] = [
    {
      id: 1,
      name: "Overview",
      icon: (isActive) => (
        <IconOverview size={24} color={isActive ? "#277c78" : "#B3B3B3"} />
      ),
      to: "/",
    },
    {
      id: 2,
      name: "Transactions",
      icon: (isActive) => (
        <IconTransaction size={24} color={isActive ? "#277c78" : "#B3B3B3"} />
      ),
      to: "/transactions",
    },
    {
      id: 3,
      name: "Budgets",
      icon: (isActive) => (
        <IconBudget size={24} color={isActive ? "#277c78" : "#B3B3B3"} />
      ),
      to: "/budgets",
    },
    {
      id: 4,
      name: "Pots",
      icon: (isActive) => (
        <IconPot size={24} color={isActive ? "#277c78" : "#B3B3B3"} />
      ),
      to: "/pots",
    },
    {
      id: 5,
      name: "Recurring Bills",
      icon: (isActive) => (
        <IconReceipt size={24} color={isActive ? "#277c78" : "#B3B3B3"} />
      ),
      to: "/bills",
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
      <div className="flex flex-col gap-16 items-start">
        <AnimatePresence mode="wait">
          {isSideBarOpen ? (
            <motion.img
              key="large"
              src={logoLarge}
              alt="logo Finance app"
              className="h-[22px] "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          ) : (
            <motion.img
              key="small"
              src={logoSmall}
              alt="logo Finance app"
              className="h-[22px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>

        <ul className="flex flex-col gap-8 text-grey-300">
          {pages.map((p) => (
            <motion.li key={p.id} className={!isSideBarOpen ? "-ml-6" : ""}>
              <NavLink
                to={p.to}
                className={({ isActive }) =>
                  `flex gap-4 items-center py-4 font3 transition-colors duration-200 ${
                    isSideBarOpen
                      ? `px-8 -ml-8 ${isActive ? "bg-white rounded-xl text-grey-900 border-l-4 border-green" : ""}`
                      : `justify-center w-full px-4 ${isActive ? "bg-white rounded-r-xl" : ""}`
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {p.icon(isActive)}
                    <motion.span
                      animate={{
                        opacity: isSideBarOpen ? 1 : 0,
                        width: isSideBarOpen ? "auto" : 0,
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
            width: isSideBarOpen ? "auto" : 0,
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
