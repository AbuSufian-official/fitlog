import React from "react";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { Bounce, ToastContainer } from 'react-toastify';
import Navber from "./components/navber";
import ContextProvider from "./context/context";
import Footer from "./components/footer";

const oswald = Oswald({
  variable: "--janina",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "FITLOG",
  description: "FITLOG is fitness giud app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en" 
       data-theme="light" 
      className={`h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${oswald.className}`}>
        <ContextProvider>

        
        <Navber/>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />

        <Footer/>
        
        </ContextProvider>



      </body>
    </html>
  );
}
