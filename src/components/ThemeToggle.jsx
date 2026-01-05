import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  // Audio feedback
  const playClick = () => {
    const audio = new Audio("light.mp3");
    audio.volume = 0.6;
    audio.play();
  };

  return (
    <button
      onClick={() => {
        setDarkMode(!darkMode);
        playClick();
      }}
      className="relative p-2 rounded-lg transition transform hover:scale-110 focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 40 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!darkMode ? (
            <motion.i
              key="moon"
              initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
              className="fa-regular fa-moon text-2xl rotate-330"
            />
          ) : (
            <motion.i
              key="sun"
              initial={{ scale: 0.5, opacity: 0, rotate: 90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: -90 }}
              className="fa-regular fa-sun text-2xl"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default ThemeToggle;