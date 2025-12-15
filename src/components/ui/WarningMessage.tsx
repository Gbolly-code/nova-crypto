import React from 'react';

interface WarningMessageProps {
  message: string;
}

export const WarningMessage: React.FC<WarningMessageProps> = ({ message }) => {
  return (
    <div className="mx-auto flex h-10 w-full max-w-[512px] items-center gap-2">
      <svg
        className="h-5 w-5 text-gray-600 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="flex-1 text-sm text-gray-600">{message}</p>
    </div>
  );
};

