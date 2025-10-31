import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kim Mark J. Biene - Web Developer & Information Systems",
  description:
    "Portfolio of Kim Mark J. Biene - BS Information Systems student specializing in web development and UI/UX design",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
