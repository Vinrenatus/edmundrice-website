import { useSelector } from 'react-redux';
import { Navbar } from '../navigation/Navbar';
import { Footer } from './Footer';

export function Layout({ children }) {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}