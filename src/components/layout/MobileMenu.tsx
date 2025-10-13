import { motion, AnimatePresence } from 'framer-motion';
import { NavLinks } from '../shared/NavLinks';
import { NAV_LINKS } from '@/constants/navLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        key="mobileMenu"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
        className="absolute top-20 left-0 w-full rounded-3xl bg-white/70 backdrop-blur-md shadow-md py-6 md:hidden"
      >
        <NavLinks links={NAV_LINKS} onClickLink={onClose} />
      </motion.div>
    )}
  </AnimatePresence>
);
