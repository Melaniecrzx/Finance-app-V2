import NavBar from './NavBar';
import SideBar from './SideBar';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export default function Main() {
  const location = useLocation();
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
          <Outlet location={location.pathname} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
