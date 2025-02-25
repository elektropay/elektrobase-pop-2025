

import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FEFEFE] pt-16 text-gray-300">
      <div className="border-t border-gray-200 mt-16 py-8 container mx-auto px-4">
        {/* Fixed the grid columns value and adjusted the first column width */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs">© {currentYear}  Everpay Corporation</p>
             
              <p className="flex items-center gap-2 text-gray-600 text-xs">
                Powered by{" "}
                <a
                  href="https://elektropay.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold hover:text-green-500"
                >
                  Elektropay
                </a>
              </p>

              <div className="flex flex-wrap gap-6">
                <Link href="/cookie-policy" className="text-xs hover:text-white transition-colors">
                  Cookie Policy
                </Link>
                <Link href="/privacy-policy" className="text-xs hover:text-white transition-colors">
                  Privacy 
                </Link>
                <Link href="/terms" className="text-xs hover:text-white transition-colors">
                  Terms 
                </Link>
                <Link href="/security-policy" className="text-xs hover:text-white transition-colors">
                  Security
                </Link>
              </div>   
              <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}


