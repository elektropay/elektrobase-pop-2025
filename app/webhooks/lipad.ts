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
    const signature = req.headers['lipad-signature'] as string;
    
    if (!signature) {
      return res.status(400).json({ message: 'Missing signature header' });
    }

    await lipadApi.handleWebhook(req.body, signature);
    
    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).json({ message: 'Webhook error' });
  }
}
