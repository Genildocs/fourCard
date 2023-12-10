import React, { createContext, useState, useEffect } from 'react';

// Crie o contexto
export const ThemeContext = createContext();

// Crie o provedor do contexto
export const ThemeContextProvider = ({ children }) => {
  // Verifique se há um tema armazenado no local storage
  const storedTheme = localStorage.getItem('theme');

  // Defina o estado inicial do tema com base no tema armazenado ou 'light' como padrão
  const [theme, setTheme] = useState(storedTheme || 'light');

  // Função para alternar entre os temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Atualize o tema armazenado no local storage sempre que o tema for alterado
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Renderize o provedor do contexto com o estado do tema e a função de alternar tema
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
