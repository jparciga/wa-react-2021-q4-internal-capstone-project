import { createContext } from "react";

const PageContext = createContext({
    current: null,
    navigate: () => {}
});

export default PageContext;