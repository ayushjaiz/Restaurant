import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const manageOnline = () => setIsOnline(true);
        const manageOffline = () => setIsOnline(false);

        window.addEventListener("online", manageOnline);
        window.addEventListener("offline", manageOffline);

        return () => {
            window.removeEventListener("online", manageOnline);
            window.removeEventListener("offline", manageOffline);
        }
    }, [])

    return isOnline;
}

export default useOnline;