import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import Exchanges from './Exchanges';
import TradingAndMarketAnalysis from './TradingAndMarketAnalysis';
import News from './News';
import Tweets from './Tweets';

export default function CoinLurk() {
  return (
    <main className="w-full">
      <Header />
      <MainContainer>
        <div className="flex flex-col lg:flex-row flex-1">
          <div className="w-full xl:w-1/4 mx-4">
            <Exchanges />
            <TradingAndMarketAnalysis />
          </div>
          <div className="w-full xl:w-1/2 mx-4">
            <News />
          </div>
          <div className="w-full mx-4 xl:w-1/4">
            <Tweets title="Bitcoin Tweets" />
            <Tweets title="Ethereum Tweets" coin="ethereum" />
          </div>
        </div>
      </MainContainer>
    </main>
  );
}
