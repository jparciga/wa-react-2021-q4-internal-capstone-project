import { createContext } from "react";

export const PageContext = createContext({
    current: null,
    navigate: () => {}
});