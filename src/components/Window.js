import React from 'react';

export default function Window({ children, title }) {
  return (
    <div className="my-4 w-full">
      <div className="font-bold p-2">{title}</div>
      <div className="bg-darker-grey p-4 overflow-y-scroll" style={{ maxHeight: 300 }}>
        {children}
      </div>
    </div>
  );
}
