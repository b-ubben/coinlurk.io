import React from 'react';

export default function Window({ children, title }) {
  return (
    <div className="my-4 w-full bg-darker-grey shadow-lg border border-black rounded rounded-tr rounded-tl rounded-br-none rounded-bl-none">
      <div className="bg-grey p-2 border-b border-black font-bold rounded-tr rounded-tl text-center">
        {title}
      </div>
      <div className="py-4 px-4">{children}</div>
    </div>
  );
}
