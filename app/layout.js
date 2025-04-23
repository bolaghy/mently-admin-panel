// This is a Next.js layout component that wraps around the entire application.
import React from "react";
import "./globals.css";
import SideBar from "@/components/SideBar";

export const metadata = {
  title: "My Application",
  description: "This is mentely test project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SideBar>{children}</SideBar>
        
      </body>
    </html>
  );
}
