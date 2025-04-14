import React from 'react';
import { LineChart } from 'lucide-react';
import { LanguageProvider } from './hooks/useLanguage';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageToggle } from './components/LanguageToggle';
import { Hero } from './components/Hero';
import { Services } from './components/Services';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LineChart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="font-semibold">DataExpert</span>
            </div>
            
            <div className="flex items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Hero />
          <Services />
        </main>
      </div>
    </LanguageProvider>
  );
}