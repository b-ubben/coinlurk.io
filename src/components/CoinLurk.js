import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import Exchanges from './Exchanges';
import TradingAndMarketAnalysis from './TradingAndMarketAnalysis';
import News from './News';

export default function CoinLurk() {
  return (
    <main className="bg-dark-grey text-gray-100 min-h-screen w-full">
      <Header />
      <MainContainer>
        <div className="flex flex-col lg:flex-row flex-1">
          <div className="w-full lg:w-1/4 mx-2">
            <Exchanges />
            <TradingAndMarketAnalysis />
          </div>
          <div className="w-full lg:w-1/2 mx-2">
            <News />
          </div>
        </div>
      </MainContainer>
    </main>
  );
}
