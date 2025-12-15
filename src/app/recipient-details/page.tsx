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
        <div className="mt-6 flex justify-center">
          <div className="w-full max-w-[512px] h-[224px] flex flex-col justify-between">
            <RecipientDetailsForm onSubmit={handleSubmit} formRef={formRef} />
          </div>
        </div>
      </div>
      <div className="fixed bottom-10 left-0 right-0 bg-white">
        <div className="max-w-2xl mx-auto px-6 pt-2 pb-4 flex justify-center">
          <Button type="button" onClick={handleButtonClick} className="text-lg">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

