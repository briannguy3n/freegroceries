import ClientOnly from "./components/ClientOnly"
import { useState } from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import HomePage from "./components/home page/HomePage"
import Sidebar from "./components/sidebar/Sidebar"
import RegisterModal from "./components/modals/RegisterModal"
import MenuItem from "./components/navbar/MenuItem"
import UserMenu from "./components/navbar/UserMenu"
import ToasterProvider from "./providers/ToasterProvider"
import Test from "./components/Test"
import Test2 from "./components/Test2"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FreeGroceries",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ClientOnly>
          <ToasterProvider />
          <UserMenu />
          <Test />
          <Test />
          <Test2 />
          <RegisterModal />
          <HomePage />
          <Sidebar />
        </ClientOnly>
      </body>
    </html>
  )
}
