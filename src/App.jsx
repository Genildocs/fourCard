import { useContext } from 'react';
import ButtonTheme from './components/ButtonTheme';
import Cards from './components/Cards';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={theme}>
      <ButtonTheme />
      <Cards />
    </div>
  );
}

export default App;
