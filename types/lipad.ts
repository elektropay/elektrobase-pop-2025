export interface LipadCheckoutSession {
    id: string;
    amount: number;
    currency: string;
    status: 'pending' | 'completed' | 'failed';
    metadata?: Record<string, any>;
    created_at: string;
  }
  
  export interface PaymentRecord {
    id: string;
    session_id: string;
    amount: number;
    currency: string;
    status: string;
    customer_id: string;
    metadata: Record<string, any>;
    created_at: Date;
    updated_at: Date;
  }