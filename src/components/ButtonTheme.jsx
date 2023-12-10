import React from 'react';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

export default function ButtonTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="flex justify-end pt-2 pr-3">
      <div
        className={`${
          theme === 'light'
            ? 'justify-start bg-black'
            : 'justify-end bg-slate-300'
        } switch`}
        onClick={toggleTheme}
      >
        <motion.div className="handle" layout transition={spring} />
      </div>
    </div>
  );
}
