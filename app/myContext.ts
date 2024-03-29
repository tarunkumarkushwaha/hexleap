// import { createContext } from 'react';

// export const Context = createContext(false);

import { createContext, useContext } from "react"
export type Content = {
  dark: boolean
  setdark:(_value: boolean) => void
}
export const Context = createContext<Content>({
dark: false, // set a default value
setdark: () => {},
})
