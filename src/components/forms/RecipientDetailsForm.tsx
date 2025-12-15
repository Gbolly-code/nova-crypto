'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { PhoneInput } from '@/components/ui/PhoneInput';
import { Button } from '@/components/ui/Button';
import { RecipientDetails } from '@/types';

interface RecipientDetailsFormProps {
  onSubmit: (data: RecipientDetails) => void;
  initialData?: Partial<RecipientDetails>;
  formRef?: React.RefObject<HTMLFormElement | null>;
}

const RecipientDetailsForm: React.FC<RecipientDetailsFormProps> = ({
  onSubmit,
  initialData,
  formRef,
}) => {
  const [email, setEmail] = useState(initialData?.email || '');
  const [countryCode, setCountryCode] = useState(initialData?.countryCode || '+234');
  const [phoneNumber, setPhoneNumber] = useState(initialData?.phoneNumber || '');
  const [errors, setErrors] = useState<{ email?: string; phoneNumber?: string }>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 10;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { email?: string; phoneNumber?: string } = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!validatePhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit({
      email: email.trim(),
      phoneNumber: phoneNumber.trim(),
      countryCode,
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8" id="recipient-form">
      <Input
        label="Recipient email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (errors.email) setErrors({ ...errors, email: undefined });
        }}
        placeholder="Enter recipient email"
        error={errors.email}
      />

      <PhoneInput
        label="Recipient phone number"
        countryCode={countryCode}
        phoneNumber={phoneNumber}
        onCountryCodeChange={setCountryCode}
        onPhoneNumberChange={(value) => {
          setPhoneNumber(value);
          if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
        }}
        error={errors.phoneNumber}
      />
    </form>
  );
};

export { RecipientDetailsForm };

