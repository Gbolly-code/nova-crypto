import React from 'react';

interface PaymentDetailRowProps {
  label: string;
  value: string;
  showCopy?: boolean;
  onCopy?: () => void;
}

export const PaymentDetailRow: React.FC<PaymentDetailRowProps> = ({
  label,
  value,
  showCopy = false,
  onCopy,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    if (showCopy && onCopy) {
      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        onCopy();
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-gray-600 text-sm">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-gray-900 text-sm font-medium">{value}</span>
        {showCopy && (
          <button
            type="button"
            onClick={handleCopy}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label={`Copy ${label}`}
          >
            {copied ? (
              <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

