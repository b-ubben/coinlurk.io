import React from 'react';
import Window from './Window';

const exchanges = [
  { text: 'Binance', href: 'https://www.binance.com' },
  { text: 'Bibox', href: 'https://www.bibox.com' },
  { text: 'Binance US', href: 'https://www.binance.us' },
  { text: 'Bitfinex', href: 'https://www.bitfinex.com' },
  { text: 'Bithumb', href: 'https://www.bithumb.com' },
  { text: 'ByBit', href: 'https://www.bybit.com' },
  { text: 'CoinBase', href: 'https://www.coinbase.com' },
  { text: 'FTX', href: 'https://www.ftx.com' },
  { text: 'Huobi Global', href: 'https://www.huobi.com/' },
  { text: 'KuCoin', href: 'https://www.kucoin.com' },
  { text: 'Kraken', href: 'https://www.kraken.com' },
  { text: 'Liquid', href: 'https://www.liquid.com' },
  { text: 'OKEx', href: 'https://www.okex.com' },
  { text: 'Poloniex', href: 'https://www.poloniex.com' },
  { text: 'Phemex', href: 'https://www.phemex.com' },
];

export default function Exchanges() {
  return (
    <section>
      <Window title="Exchanges">
        <ul className="flex flex-wrap w-full">
          {exchanges.map(exch => (
            <li className="block w-1/2 sm:w-1/3 my-2" key={exch.href}>
              <a
                href={exch.href}
                alt={exch.text}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:underline"
              >
                {exch.text}
              </a>
            </li>
          ))}
        </ul>
      </Window>
    </section>
  );
}
