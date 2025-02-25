import { NextApiRequest, NextApiResponse } from "next";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createServerSupabaseClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return res.status(401).json({ message: "Unauthorized" });

  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("merchant_id", user.user.id)
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json({ message: error.message });

  res.status(200).json(data);
}
