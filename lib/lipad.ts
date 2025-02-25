import { createClient } from '@supabase/supabase-js';
import { LipadCheckoutSession } from '../types/lipad';

export class LipadAPI {
  private apiKey: string;
  private supabase;
  private baseUrl: string;

  constructor(apiKey: string, supabaseUrl: string, supabaseKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = process.env.LIPAD_API_URL || 'https://api.lipad.io/v1';
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async createCheckoutSession(amount: number, currency: string, metadata?: Record<string, any>): Promise<LipadCheckoutSession> {
    try {
      const response = await fetch(`${this.baseUrl}/checkout/sessions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          currency,
          metadata,
        }),
      });

      if (!response.ok) {
        throw new Error(`Lipad API error: ${response.statusText}`);
      }

      const session = await response.json();

      // Store session in database
      await this.supabase
        .from('payment_sessions')
        .insert({
          external_id: session.id,
          amount: session.amount,
          currency: session.currency,
          status: session.status,
          metadata: session.metadata,
        });

      return session;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      throw error;
    }
  }

  async handleWebhook(payload: any, signature: string): Promise<void> {
    try {
      // Verify webhook signature (implementation depends on Lipad's webhook signature method)
      this.verifyWebhookSignature(payload, signature);

      // Update payment session status in database
      const { session_id, status } = payload;
      
      await this.supabase
        .from('payment_sessions')
        .update({ status })
        .match({ external_id: session_id });

    } catch (error) {
      console.error('Error handling webhook:', error);
      throw error;
    }
  }

  private verifyWebhookSignature(payload: any, signature: string): boolean {
    // Implement webhook signature verification based on Lipad's documentation
    throw new Error('Webhook signature verification not implemented');
  }
}
