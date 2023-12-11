import React, { useEffect } from 'react';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

export default function ButtonTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 50,
  };

  useEffect(() => {
    theme === 'dark'
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, [theme]);

  return (
    <div className="flex justify-end pt-2 pr-3">
      <div
        className={`${
          theme === 'light' ? 'justify-start bg-black' : 'justify-end bg-white'
        } switch`}
        onClick={toggleTheme}
      >
        <motion.div
          className={`${theme === 'light' ? 'bg-white' : 'bg-black'} handle`}
          layout
          transition={spring}
        />
      </div>
    </div>
  );
}
