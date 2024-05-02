import { ReactNode, createContext, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleMode: () => {},
});

interface ThemeProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState(
    // 창을 닫거나, 새로 고침을 해도 그 전의 상태를 window에 저장하기 위한 코드
    window.localStorage.getItem("theme") || "light"
  );

  const toggleMode = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    window.localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
