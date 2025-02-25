import Link from "next/link"
import HeaderAuth from "@/components/header-auth";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  CreditCard,
  Building2,
  Store,
  Globe,
  Wallet,
  ShieldCheck,
  Code2,
  BookOpen,
  BarChart3,
  Settings,
  Users,
  Smartphone,
} from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link className="flex items-center gap-2 font-bold text-xl" href="/">
          <svg
            className="h-6 w-6 text-[#4CAF50]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          Everpay
        </Link>
        <NavigationMenu className="ml-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] grid-cols-2 p-6 gap-4">
                  <div className="grid gap-4">
                    <h3 className="font-semibold">Payment Solutions</h3>
                    <div className="grid gap-2">
                      <Link 
                        href="/products/payments"
                        className="group flex items-center gap-3 rounded-lg p-2 hover:bg-muted"
                      >
                        <CreditCard className="h-5 w-5 text-[#4CAF50]" />
                        <div>
                          <div className="font-medium">Payment Processing</div>
                          <div className="text-sm text-muted-foreground">Accept payments online and in-person</div>
                        </div>
                      </Link>
                      <Link 
                        href="/products/pos"
                        className="group flex items-center gap-3 rounded-lg p-2 hover:bg-muted"
                      >
                        <Store className="h-5 w-5 text-[#4CAF50]" />
                        <div>
                          <div className="font-medium">Point of Sale</div>
                          <div className="text-sm text-muted-foreground">Complete retail and restaurant solutions</div>
                        </div>
                      </Link>
                      <Link 
                        href="/products/global"
                        className="group flex items-center gap-3 rounded-lg p-2 hover:bg-muted"
                      >
                        <Globe className="h-5 w-5 text-[#4CAF50]" />
                        <div>
                          <div className="font-medium">Global Payments</div>
                          <div className="text-sm text-muted-foreground">Accept payments in 135+ currencies</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <h3 className="font-semibold">Financial Tools</h3>
                    <div className="grid gap-2">
                      <Link 
                        href="/products/wallet"
                        className="group flex items-center gap-3 rounded-lg p-2 hover:bg-muted"
                      >
                        <Wallet className="h-5 w-5 text-[#4CAF50]" />
                        <div>
                          <div className="font-medium">Digital Wallet</div>
                          <div className="text-sm text-muted-foreground">Secure payment storage and transfers</div>
                        </div>
                      </Link>
                      <Link 
                        href="/products/security"
                        className="group flex items-center gap-3 rounded-lg p-2 hover:bg-muted"
                      >
                        <ShieldCheck className="h-5 w-5 text-[#4CAF50]" />
                        <div>
                          <div className="font-medium">Security & Fraud</div>
                          <div className="text-sm text-muted-foreground">Advanced protection for your business</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] grid-cols-2 p-6 gap-4">
                  <div className="grid gap-4">
                    <h3 className="font-semibold">Payment Solutions</h3>
                    <div className="grid gap-2">
                      <Link 
                        href="/products/payments"
                        className="group flex items-center gap-3 rounded-lg p-2 hover:bg-muted"
                      >
                        <CreditCard className="h-5 w-5 text-[#4CAF50]" />
                        <div>
                          <div className="font-medium">Payment Processing</div>
                          <div className="text-sm text-muted-foreground">Accept payments online and in-person</div>
                        </div>
                      </Link>
                      <Link 
                        href="/products/pos"
                        className="group flex items-center gap-3 rounded-lg p-2 hover:bg-muted"
                      >
                        <Store className="h-5 w-5 text-[#4CAF50]" />
                        <div>
                          <div className="font-medium">Point of Sale</div>
                          <div className="text-sm text-muted-foreground">Complete retail and restaurant solutions</div>
                        </div>
                      </Link>
                      <Link 
                        href="/products/global"
                        className="group flex items-center gap-3 rounded-lg p-2 hover:bg-muted"
                      >
                        <Globe className="h-5 w-5 text-[#4CAF50]" />
                        <div>
                          <div className="font-medium">Global Payments</div>
                          <div className="text-sm text-muted-foreground">Accept payments in 135+ currencies</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <h3 className="font-semibold">Financial Tools</h3>
                    <div className="grid gap-2">
                      <Link 
                        href="/products/wallet"
                        className="group flex items-center gap-3 rounded-lg p-2 hover:bg-muted"
                      >
                        <Wallet className="h-5 w-5 text-[#4CAF50]" />
                        <div>
                          <div className="font-medium">Digital Wallet</div>
                          <div className="text-sm text-muted-foreground">Secure payment storage and transfers</div>
                        </div>
                      </Link>
                      <Link 
                        href="/products/security"
                        className="group flex items-center gap-3 rounded-lg p-2 hover:bg-muted"
                      >
                        <ShieldCheck className="h-5 w-5 text-[#4CAF50]" />
                        <div>
                          <div className="font-medium">Security & Fraud</div>
                          <div className="text-sm text-muted-foreground">Advanced protection for your business</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium" href="/pricing">
                Pricing
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium" href="developers">
                Developers
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
            
        <HeaderAuth />   
      </div>
    </header>
  )
}           
