import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import AuthProvider from './context/AuthProvider.jsx';

createRoot(document.getElementById("root")).render(
  <div className="dark:bg-slate-600 dark:text-white">
    <AuthProvider>
      <App />
      <Toaster />
    </AuthProvider>
  </div>
);
