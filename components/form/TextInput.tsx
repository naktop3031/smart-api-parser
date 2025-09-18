"use client";

import Box from "@mui/material/Box";
import * as React from "react";
import {UseFormRegister} from "react-hook-form";

interface TextInputProps {
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  type?: string;
  validation?: Record<string, any>;
}

export const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  register,
  name,
  type = "text",
  validation = {},
}) => {
  return (
    <Box>
      <p className="text-xs text-gray-500 pl-1">{placeholder}</p>
      <input
        {...register(name, validation)}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400"
      />
    </Box>
  );
};
