import { signOutAction } from "../app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Button } from "./ui/button";
import { DropdownMenu } from "./ui/dropdown-menu"
import { createClient } from '@/utils/supabase/server';

export default async function AuthButton() {
  const supabase = await createClient();

      
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!hasEnvVars) {
    return (
      <>
        <div className="flex gap-4 items-center">
          
          
        </div>
      </>
    );
  }
  return user ? (
    <div className="flex items-center gap-4">
      
    
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"}>
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/signup">Sign up</Link>
      </Button>
    </div>
  );
}
