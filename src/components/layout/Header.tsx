'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, showBackButton = true }) => {
  const router = useRouter();

  return (
    <header className="mb-6">
      <div className="mx-auto flex w-full max-w-[512px] items-center">
        {showBackButton && (
          <button
            type="button"
            onClick={() => router.back()}
            className="mr-4 flex h-6 w-6 items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Go back"
          >
            <svg
              className="h-6 w-6 text-teal-700"
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
        <h1 className="flex-1 text-center text-[20px] leading-none font-medium text-teal-700">
          {title}
        </h1>
      </div>
    </header>
  );
};



