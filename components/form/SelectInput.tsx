"use client";

import * as React from "react";
import {UseFormRegister} from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface SelectInputProps {
  name: string;
  register: UseFormRegister<any>;
  options: Option[];
}

export const SelectInput: React.FC<SelectInputProps> = ({
  name,
  register,
  options,
}) => {
  return (
    <select
      {...register(name)}
      className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
