import { ThemeProvider, useTheme } from './context/ThemeContext';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import CursorTrail from './components/CursorTrail';
import Seo from './components/Seo';

function MainLayout() {
  const { isTheme1 } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isTheme1 ? 'bg-[#071D18] text-[#E9E1CC]' : 'bg-[#F4F1EC] text-[#262522]'
      }`}
    >
      <Seo />
      <CursorTrail />
      <CustomCursor />
      <Navbar />
      <Home />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
