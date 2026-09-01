import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import InteractiveMouse from "@/components/InteractiveMouse"

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn("antialiased w-full min-h-screen", fontMono.variable, "font-sans", geist.variable)}
    >
      <body className="relative w-full min-h-screen lg:cursor-none bg-background text-foreground antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* O seu componente do mouse com partículas fica ativo aqui */}
          <InteractiveMouse />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
