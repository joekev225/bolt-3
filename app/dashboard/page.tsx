"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { ROUTES } from '@/lib/routes';

export default function Dashboard() {
  // ... (rest of the component code remains the same)

  return (
    <div className="container mx-auto p-8">
      {/* ... (rest of the JSX remains the same) */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Actions rapides</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link href={ROUTES.PAYMENT_TERMINAL}>
            <Button className="w-full">Terminal de paiement</Button>
          </Link>
          <Link href={ROUTES.PROFILE}>
            <Button className="w-full" variant="outline">Gérer le profil</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}