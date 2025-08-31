import { Bold } from "lucide-react";
import { useEffect, useState } from "react";

const Clock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const formatTimezone = (tz) => {
    // Convert timezone to shorter format
    const parts = tz.split("/");
    return parts[parts.length - 1].replace("_", " ");
  };

  const time = formatTime(now);
  const timezone = formatTimezone(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const date = now.toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        lineHeight: "1.2",
        color: "var(--text-secondary)",
        textAlign: "right",
        letterSpacing: "0.5px",
        fontWeight: "500",
      }}
    >
      <div
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "var(--accent-color)",
          marginBottom: "1px",
        }}
      >
        {time}
      </div>
    </div>
  );
};

export default Clock;
