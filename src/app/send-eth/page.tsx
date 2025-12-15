'use client';

import { Header } from '@/components/layout/Header';
import { AddressInput } from '@/components/ui/AddressInput';
import { PaymentDetailRow } from '@/components/ui/PaymentDetailRow';
import { WarningMessage } from '@/components/ui/WarningMessage';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function SendEthPage() {
  const router = useRouter();

  const handleCopyAddress = () => {};
  const handleCopyAmount = () => {};
  const handleSent = () => {};

  return (
    <div className="min-h-screen bg-white w-full flex flex-col">
      <div className="max-w-2xl mx-auto w-full px-6 py-8 flex-1 pb-24">
        <Header title="Send ETH to the address below" />
        
        <div className="space-y-8">
          <div className="flex justify-center">
            <AddressInput
              value="4LiV4YjbxsL6739MKghUd"
              onCopy={handleCopyAddress}
            />
          </div>

          <div className="mx-auto w-full max-w-[512px] min-h-[144px] rounded-[10px] bg-gray-50 px-6 py-4 flex flex-col gap-6">
            <PaymentDetailRow
              label="Amount to send"
              value="100 ETH"
              showCopy
              onCopy={handleCopyAmount}
            />
            <PaymentDetailRow
              label="Network"
              value="ETH"
            />
            <PaymentDetailRow
              label="Wallet"
              value="Other"
            />
          </div>

          <WarningMessage message="Only send (USDT) to this address. Ensure the sender is on the (CELO) network otherwise you might lose your deposit" />
        </div>
      </div>

      <div className="fixed bottom-10 left-0 right-0 bg-white">
        <div className="max-w-2xl mx-auto px-6 pt-2 pb-4 flex justify-center">
          <Button type="button" onClick={handleSent} className="text-lg">
            I have sent it
          </Button>
        </div>
      </div>
    </div>
  );
}

