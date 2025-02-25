import { NextApiRequest, NextApiResponse } from 'next';
import { LipadAPI } from '@/lib/lipad';

const lipadApi = new LipadAPI(
  process.env.LIPAD_API_KEY!,
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { amount, currency, metadata } = req.body;

    const session = await lipadApi.createCheckoutSession(amount, currency, metadata);
    
    res.status(200).json(session);
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(400).json({ message: 'Error creating checkout session' });
  }
}