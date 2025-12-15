import React from 'react';

interface WarningMessageProps {
  message: string;
}

export const WarningMessage: React.FC<WarningMessageProps> = ({
  message,
}) => {
  return (
    <div className="flex items-start gap-3 p-4">
      <svg
        className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5"
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
      <p className="text-sm text-gray-600 flex-1">{message}</p>
    </div>
  );
};

