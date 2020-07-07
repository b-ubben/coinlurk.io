import React from 'react';
import Window from './Window';

const links = [
  { text: '3Commas', href: 'https://3commas.io' },
  { text: 'TradingView', href: 'https://tradingview.com' },
  { text: 'PrimeXBT', href: 'https://primexbt.com' },
];

export default function TradingAndMarketAnalysis() {
  return (
    <section>
      <Window title="Trading & Market Analysis">
        <ul className="flex flex-wrap w-full">
          {links.map(link => (
            <li className="block w-1/2 sm:w-1/3 my-2 sm:text-center" key={link.href}>
              <a
                href={link.href}
                alt={link.text}
                target="_blank"
                rel="noreferrer noopener"
                className="text-yellow-600"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </Window>
    </section>
  );
}
