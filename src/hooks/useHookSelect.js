import { useState } from "react";

const useHookSelect = () => {
    const [select, setSelect] = useState("Usuários");

    return { select, setSelect };
};

export default useHookSelect  
