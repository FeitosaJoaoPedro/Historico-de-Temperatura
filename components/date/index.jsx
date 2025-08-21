"use client";

import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Date({ label }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        onChange={(newValue) => localStorage.setItem(label, newValue)}
        slotProps={{
          textField: {
            sx: { width: 230 },
          },
        }}
      />
    </LocalizationProvider>
  );
}
