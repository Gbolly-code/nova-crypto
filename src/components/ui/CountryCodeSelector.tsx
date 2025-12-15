'use client';

import React, { useState, useRef, useEffect } from 'react';
import { countryCodes } from '@/lib/utils';

// Import flag components statically
import NG from 'country-flag-icons/react/3x2/NG';
import US from 'country-flag-icons/react/3x2/US';
import GB from 'country-flag-icons/react/3x2/GB';
import CA from 'country-flag-icons/react/3x2/CA';
import KE from 'country-flag-icons/react/3x2/KE';
import GH from 'country-flag-icons/react/3x2/GH';
import ZA from 'country-flag-icons/react/3x2/ZA';
import IN from 'country-flag-icons/react/3x2/IN';
import AU from 'country-flag-icons/react/3x2/AU';
import DE from 'country-flag-icons/react/3x2/DE';
import FR from 'country-flag-icons/react/3x2/FR';
import BR from 'country-flag-icons/react/3x2/BR';

const flagMap: Record<string, React.ComponentType<{ className?: string }>> = {
  NG,
  US,
  GB,
  CA,
  KE,
  GH,
  ZA,
  IN,
  AU,
  DE,
  FR,
  BR,
};

interface CountryCodeSelectorProps {
  value: string;
  onChange: (dialCode: string) => void;
}

export const CountryCodeSelector: React.FC<CountryCodeSelectorProps> = ({
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry = countryCodes.find(c => c.dialCode === value) || countryCodes[0];
  const FlagComponent = flagMap[selectedCountry.code];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-3 h-[48px] rounded-l-full border border-r-0 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent relative z-10"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {FlagComponent ? (
          <FlagComponent className="w-5 h-4 object-cover rounded-sm" />
        ) : (
          <span className="w-5 h-4 bg-gray-200 rounded-sm flex items-center justify-center text-xs">
            {selectedCountry.code}
          </span>
        )}
        <span className="text-gray-600 text-sm">{selectedCountry.dialCode}</span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute z-10 mt-1 w-64 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto"
          role="listbox"
        >
          {countryCodes.map((country) => {
            const CountryFlag = flagMap[country.code];
            return (
              <button
                key={country.code}
                type="button"
                onClick={() => {
                  onChange(country.dialCode);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 ${
                  value === country.dialCode ? 'bg-teal-50' : ''
                }`}
                role="option"
                aria-selected={value === country.dialCode}
              >
                {CountryFlag ? (
                  <CountryFlag className="w-6 h-4 object-cover rounded-sm" />
                ) : (
                  <span className="w-6 h-4 bg-gray-200 rounded-sm flex items-center justify-center text-xs">
                    {country.code}
                  </span>
                )}
                <span className="text-sm">{country.dialCode}</span>
                <span className="text-sm text-gray-600 ml-auto">{country.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

