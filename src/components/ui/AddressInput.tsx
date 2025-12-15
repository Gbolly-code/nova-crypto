import React, { useState } from 'react';

interface AddressInputProps {
  value: string;
  onCopy?: () => void;
}

export const AddressInput: React.FC<AddressInputProps> = ({
  value,
  onCopy,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      onCopy?.();
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex h-10 w-[250px] items-center gap-2 rounded-[30px] border border-green-200 bg-green-50 px-4 py-2">
      <span className="flex-1 truncate text-sm font-mono text-gray-900">
        {value}
      </span>
      <button
        type="button"
        onClick={handleCopy}
        className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-green-100 transition-colors"
        aria-label="Copy address"
      >
        {copied ? (
          <svg
            className="h-4 w-4 text-green-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            className="h-4 w-4 text-green-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

