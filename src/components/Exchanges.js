import React from 'react';
import Window from './Window';

const exchanges = [
  { text: 'Binance', href: 'https://binance.com' },
  { text: 'Binance US', href: 'https://binance.us' },
  { text: 'ByBit', href: 'https://bybit.com' },
  { text: 'Kraken', href: 'https://kraken.com' },
  { text: 'Phemex', href: 'https://phemex.com' },
];

export default function Exchanges() {
  return (
    <section>
      <Window title="Exchanges">
        <ul className="flex flex-wrap w-full">
          {exchanges.map(exch => (
            <li className="block w-1/3 my-2 text-center">
              <a
                href={exch.href}
                alt={exch.text}
                target="_blank"
                rel="noreferrer noopener"
                className="text-yellow-600"
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
