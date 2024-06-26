import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  fadeIn: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },

  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },

  fadeOut: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const RouteTransitions = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <div className="effect-2">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          initial="fadeIn"
          animate="inactive"
          exit="fadeOut"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RouteTransitions;
