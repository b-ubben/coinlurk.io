import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import CoinLurk from './components/CoinLurk';
import './tailwindcss/tailwind.css';

export default function App() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen w-full">
      <GlobalStyle />
      <CoinLurk />
    </div>
  );
}
