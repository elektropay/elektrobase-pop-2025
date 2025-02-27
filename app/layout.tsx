import { Geist } from "next/font/google";
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { Navbar } from "@/components/app-header";
import Footer from "@/components/app-footer"; 
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { EnvVarWarning } from "@/components/env-var-warning";
// Removed the import for Modal as it cannot be found


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Everpay Platform",
  description: "Payments As A Service",
};
const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={geistSans.className} suppressHydrationWarning>
    
        <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <ToastProvider />
                <ModalProvider />
                  <Navbar />
                 <div className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                  <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                   
                   <div className="flex gap-5 items-center">
                    <Link href={"/"}>
                     <img src="https://res.cloudinary.com/lmj6rf6tz/image/upload/v1574986847/img/logo-new.png" width={130} height={26} />
                      {!hasEnvVars ? <EnvVarWarning /> : null}
                    </Link>
                  </div>

                </div>
              </div>
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>
            </div>
           </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
