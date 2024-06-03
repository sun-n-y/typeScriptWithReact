import React, { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

//type for our state
type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

//provide eventual shape of data, for value prop ======================================
const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

//type for children prop
export function ThemeProvider({
  children,
  defaultTheme = 'system',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error(`use theme must be used within the theme provider`);
  }
  return context;
};
