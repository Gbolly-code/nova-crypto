import React from 'react';
import { CountryCodeSelector } from './CountryCodeSelector';

interface PhoneInputProps {
  label: string;
  countryCode: string;
  phoneNumber: string;
  onCountryCodeChange: (code: string) => void;
  onPhoneNumberChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  countryCode,
  phoneNumber,
  onCountryCodeChange,
  onPhoneNumberChange,
  error,
  placeholder = '000 - 000 - 00000',
}) => {
  const inputId = `phone-${label.toLowerCase().replace(/\s+/g, '-')}`;

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format as XXX - XXX - XXXXX
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)} - ${digits.slice(3)}`;
    return `${digits.slice(0, 3)} - ${digits.slice(3, 6)} - ${digits.slice(6, 11)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    onPhoneNumberChange(formatted);
  };

  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className="block text-teal-700 font-medium mb-2"
      >
        {label}
      </label>
      <div className="flex">
        <CountryCodeSelector value={countryCode} onChange={onCountryCodeChange} />
        <input
          id={inputId}
          type="tel"
          value={phoneNumber}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={17} // "000 - 000 - 00000".length
          className={`
            flex-1 px-4 py-3 h-[48px] rounded-r-full border-l-0 border border-gray-300
            text-gray-900 bg-white
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 focus:border-teal-500 focus:border-l-0
            placeholder:text-gray-400
            ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
      </div>
      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1 text-sm text-red-500"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

