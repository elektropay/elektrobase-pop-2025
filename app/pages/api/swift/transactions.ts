import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { authorization } = req.headers;

  // Verify user authentication
  const { data: user, error } = await supabase.auth.getUser(authorization?.split(' ')[1] || '');

  if (error || !user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Get transaction details from request body
    const { accountNumber, amount, currency } = req.body;

    // Validate required fields
    if (!accountNumber || !amount || !currency) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Make request to SWIFT API
    const response = await fetch('https://api.swift.com/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SWIFT_API_KEY}`,
      },
      body: JSON.stringify({
        accountNumber,
        amount,
        currency,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();

    // Store transaction in Supabase
    const { error: dbError } = await supabase
      .from('transactions')
      .insert([{ 
        accountNumber, 
        amount, 
        currency, 
        status: 'completed',
        user_id: user.data.id 
      }]);

    if (dbError) {
      throw dbError;
    }

    return res.status(200).json(data);
  } catch (error: any) {
    console.error('Transaction error:', error);
    return res.status(500).json({ error: error.message });
  }
}
