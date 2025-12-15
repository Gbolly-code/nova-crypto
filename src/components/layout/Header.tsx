'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = true,
}) => {
  const router = useRouter();

  return (
    <header className="flex items-center gap-4 mb-6">
      {showBackButton && (
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
          aria-label="Go back"
        >
          <svg
            className="w-6 h-6 text-teal-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}
      <h1 className="text-2xl font-semibold text-teal-700 flex-1 text-center">
        {title}
      </h1>
      {showBackButton && <div className="w-10" />} {/* Spacer for centering */}
    </header>
  );
};

