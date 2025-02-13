import { useEffect, useState } from "react";

const useCountdown = (expirationDate) => {
    const [timeLeft, setTimeLeft] = useState(() => {
        const now = new Date().getTime();
        const expirationTime = new Date(expirationDate).getTime();
        return Math.max(expirationTime - now, 0);
    });

    useEffect(() => {
        if (timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => Math.max(prev - 1000, 0));
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    return formatTime(timeLeft);
};

export default useCountdown;
