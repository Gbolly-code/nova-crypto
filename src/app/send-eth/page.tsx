'use client';

import { Header } from '@/components/layout/Header';
import { AddressInput } from '@/components/ui/AddressInput';
import { PaymentDetailRow } from '@/components/ui/PaymentDetailRow';
import { WarningMessage } from '@/components/ui/WarningMessage';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function SendEthPage() {
  const router = useRouter();

  const handleCopyAddress = () => {
    console.log('Address copied');
  };

  const handleCopyAmount = () => {
    console.log('Amount copied');
  };

  const handleSent = () => {
    console.log('Payment sent');
    // Navigate to next page or handle completion
  };

  return (
    <div className="min-h-screen bg-white w-full flex flex-col">
      <div className="max-w-2xl mx-auto w-full px-6 py-8 flex-1 pb-24">
        <Header title="Send ETH to the address below" />
        
        <div className="space-y-8">
          <div className="w-1/2 mx-auto">
            <AddressInput
              value="4LiV4YjbxsL6739MKghUd"
              onCopy={handleCopyAddress}
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
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
        <div className="max-w-2xl mx-auto px-6 pt-2 pb-4">
          <Button type="button" onClick={handleSent} className="text-lg">
            I have sent it
          </Button>
        </div>
      </div>
    </div>
  );
}

