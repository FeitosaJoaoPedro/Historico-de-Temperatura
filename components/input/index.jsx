"use client";

import * as React from "react";
import { TextField } from "@mui/material";

export default function Input({ label }) {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      style={{ width: "470px" }}
    />
  );
}
