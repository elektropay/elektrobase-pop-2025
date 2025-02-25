"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"; // ShadCN Button
import { Input } from "@/components/ui/input"; // ShadCN Input
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const paymentSchema = z.object({
  currency: z.enum( ["USD", "KES", "AUD", "EUR", "GBP"]),
  email: z.string().email({ message: "Invalid email" }),
  ip_address: z.string().ip({ message: "Invalid IP address" }),
});

type PaymentFormData = z.infer<typeof paymentSchema>;

export default function PaymentForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = async (data: PaymentFormData) => {
    try {
      const response = await fetch("/api/charge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message);

      alert("Transaction Successful!");
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4 p-6 border rounded-lg shadow">
      <div>
        <label>Email</label>
        <Input type="email" {...register("email")} placeholder="Enter email" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label>IP Address</label>
        <Input type="text" {...register("ip_address")} placeholder="Enter IP Address" />
        {errors.ip_address && <p className="text-red-500">{errors.ip_address.message}</p>}
      </div>

      <div>
        <label>Currency</label>
        <Select onValueChange={(value: string) => setValue("currency", value as PaymentFormData["currency"])}>
          <SelectTrigger>
            <SelectValue placeholder="Select Currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="KES">KES</SelectItem>
            <SelectItem value="AUD">AUD</SelectItem>
            <SelectItem value="EUR">EUR</SelectItem>
            <SelectItem value="GBP">GBP</SelectItem>
          </SelectContent>
        </Select>
        {errors.currency && <p className="text-red-500">{errors.currency.message}</p>}
      </div>

      <Button type="submit" className="w-full">
        Pay Now
      </Button>
    </form>
  );
}
