import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navbar"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Admonadi - Frozen Food Berkualitas",
  description: "Nikmati hidangan lezat kapan saja dengan frozen food berkualitas dari Admonadi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}