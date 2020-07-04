import React from 'react';
import Header from './Header';
import Background from '../assets/btc-gray-bg.jpg';

export default function CoinLurk() {
  return (
    <main>
      <div className="fixed flex inset-0" style={{ filter: 'blur(2px)', zIndex: '-100' }}>
        <img
          className="w-full flex-1 object-cover relative"
          src={Background}
          alt="Bitcoin background"
        />
        <div className="bg-cloudy opacity-75 absolute inset-0" />
      </div>
      <div className="flex-1">
        <Header />
      </div>
    </main>
  );
}
