import NavBar from "./NavBar.tsx";
import SideBar from "./SideBar.tsx";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  return (
    <div className=" flex flex-1 overflow-hidden ">
      <NavBar />
      <SideBar />
      <AnimatePresence mode="wait">
        <motion.div
          className="flex-1 overflow-auto min-w-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key={location.pathname}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
