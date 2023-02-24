import { Alert } from "@mui/material";
import React from "react";

const ErrorAlert = ({ error }) => {
  return (
    error && (
      <Alert variant="filled" severity="error" className="bg-red-100 text-red-700">
        {error}
      </Alert>
    )
  );
};

export default ErrorAlert;
