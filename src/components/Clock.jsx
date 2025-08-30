import { useEffect, useState } from 'react';

const Clock = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t); }, []);
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return <span>{time} • {tz}</span>;
};

export default Clock;
