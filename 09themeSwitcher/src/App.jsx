import { useEffect, useState } from 'react'
import { ThemeProvider } from "./context/theme";
import Card from './components/Card';
import ThemeButton from './components/ThemeButton';

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => prevMode == 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{ themeMode, toggleThemeMode }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex mb-4">
              <ThemeButton />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;