import { useState } from 'react';

export function Keyword() {
  const [airplane, setAirplane] = useState('737');
  return (
    <>
      <div> Current Airplane: {airplane}</div>;
      <button
        onClick={() => {
          setAirplane('747');
        }}
      >
        Change
      </button>
    </>
  );
}
