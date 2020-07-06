import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import Exchanges from './Exchanges';

export default function CoinLurk() {
  return (
    <main className="bg-dark-grey text-gray-100 min-h-screen w-full">
      <Header />
      <MainContainer>
        <Exchanges />
      </MainContainer>
    </main>
  );
}
