import { useState } from "react";

const useHookGetBalls = () => {
    const [balls, setBalls] = useState([]); // Corrigido: setBalls

    return { balls, setBalls }; // Retornando corretamente
};

export default useHookGetBalls;
