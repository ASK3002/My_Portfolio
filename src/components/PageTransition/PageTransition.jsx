import { motion } from 'framer-motion';

// Simple variants for components that still need them
const containerVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  exit: { opacity: 0 }
};

const itemVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className="page-transition-container"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
export { containerVariants, itemVariants };
