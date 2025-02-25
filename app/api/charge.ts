import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Zod schema for validation
const paymentSchema = z.object({
  currency: z.enum(["USD", "KES", "AUD", "EUR", "GBP"]),
  email: z.string().email(),
  ip_address: z.string().ip(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const validation = paymentSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ errors: validation.error.errors });
    }

    const { currency, email, ip_address } = validation.data;

    // Send request to MekaPay
    const response = await fetch(process.env.NEXT_PUBLIC_MEKAPAY_API!, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MEKAPAY_SECRET}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currency, email, ip_address }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Transaction failed");
    }

    // Store in Supabase
    const { error } = await supabase
      .from("payments")
      .insert([{ email, currency, ip_address, status: "success" }]);

    if (error) throw error;

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

