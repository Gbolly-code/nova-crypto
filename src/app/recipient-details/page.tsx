'use client';

import { Header } from '@/components/layout/Header';
import { RecipientDetailsForm } from '@/components/forms/RecipientDetailsForm';
import { Button } from '@/components/ui/Button';
import { RecipientDetails } from '@/types';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function RecipientDetailsPage() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (data: RecipientDetails) => {
    console.log('Recipient details:', data);
    // Navigate to send ETH page
    router.push('/send-eth');
  };

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-white w-full flex flex-col">
      <div className="max-w-2xl mx-auto w-full px-6 py-8 flex-1 pb-24">
        <Header title="Recipient details" />
        <RecipientDetailsForm onSubmit={handleSubmit} formRef={formRef} />
      </div>
      <div className="fixed bottom-10 left-0 right-0 bg-white">
        <div className="max-w-2xl mx-auto px-6 pt-2 pb-4">
          <Button type="button" onClick={handleButtonClick} className="text-lg">Next</Button>
        </div>
      </div>
    </div>
  );
}

