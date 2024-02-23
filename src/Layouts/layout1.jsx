import React from 'react';
import Navbar from '../components/Navbar'
function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <header className="bg-white dark:bg-gray-800 py-4">
        <Navbar />
      </header>

      <main className="flex-grow w-full container mx-auto p-4 pt-10">
        {children}
      </main>

      <footer className="bg-gray-800 text-center py-2">
        <p className="text-sm text-white">© 2024 Gennie</p>
      </footer>
    </div>
  );
}

export default Layout;