import NextLogo from "./next-logo";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function Header() {
  
  return (
    <div className="flex flex-col gap-16 items-center">
      
      <h1 className="sr-only">Elektropay Simplified Payments</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        {" "} The fastest way to accept customers payments{" "}
        <a
          href="https://elektrobase-pop-2025.vercel.app/sign-in"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Go to Dashboard
        </a>{" "}
        and {" "}
        <a
          href="https://elektrobase-pop-2025.vercel.app/sign-up"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Sign up now
        </a>
      </p>

      
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
