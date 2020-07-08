import React from 'react';

export default function Window({ children, title, style }) {
  return (
    <div
      className="my-4 w-full bg-darker-grey shadow-lg border border-black rounded rounded-tr rounded-tl rounded-br-none rounded-bl-none"
      style={style}
    >
      <div className="bg-grey p-2 border-b border-black font-bold rounded-tr rounded-tl text-center">
        {title}
      </div>
      <div className="py-4 px-4" style={{ maxHeight: '50vh', overflowY: 'scroll' }}>
        {children}
      </div>
    </div>
  );
}
