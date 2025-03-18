import React from "react";
import { ThemeProvider } from "../contexts/ThemeContext.";
import { SidebarProvider } from "../contexts/SidebarContext";
import { SearchModalProvider } from "../contexts/SearchModalContext";

function Providers({ children }) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <SearchModalProvider>
          {children}
        </SearchModalProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default Providers;
