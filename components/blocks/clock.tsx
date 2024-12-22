'use client';
import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString('it-IT', { hour12: false }));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) {
    // Render statico iniziale
    return <div className="fade-in-right-alternate py-1 px-3 border w-[83px] text-center flex items-center justify-center rounded-2xl shadow-xl bg-white/70 backdrop-blur-md h-10">
             <p>--:--:--</p> 
            </div>;
  }
  // Render auto-aggiornato
  return (
    <div className="fade-in-right-alternate flex items-center justify-center py-1 px-3 border w-[83px] rounded-2xl shadow-xl bg-white/70 backdrop-blur-md h-10">
      <p>{time}</p>
    </div>
  );
};

export default Clock;