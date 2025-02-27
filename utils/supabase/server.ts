import { createClient as supabaseClient } from '@supabase/supabase-js';
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Anon Key:", supabaseAnonKey);

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("supabaseUrl and supabaseAnonKey are required.");
}

export const createClient = () => {
    return supabaseClient(supabaseUrl, supabaseAnonKey);
};
