import React from "react";

/**
 * @param {string} mainClass 
 * @param {React.ReactNode} children
 */
export function HomeLayout({ mainClass = "home-main", children }) {
  return (
    <main className={mainClass}>
      {children}
    </main>
  );
}
