import React from "react";

export default function RootLayout({ children }) {
  return (
    <>
      <header>Halo, header khusus about</header>
      {children}
    </>
  );
}
