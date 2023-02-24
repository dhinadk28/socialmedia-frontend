import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { BiNoEntry } from "react-icons/bi";
import HorizontalStack from "./util/HorizontalStack";

const SortBySelect = ({ onSortBy, sortBy, sorts }) => {
  return (
    <HorizontalStack
    color='secondary' spacing={1}>
      <Typography color="secondary" variant="subtitle2">
        Sort by:
      </Typography>
      <Select
      color='secondary'
        size="small"
        value={sorts[sortBy]}
        sx={{ minWidth: 150 }}
        onChange={onSortBy}
      >
        {Object.keys(sorts).map((sortName, i) => (
          <MenuItem 
          color='secondary'value={sorts[sortName]} key={i}>
            {sorts[sortName]}
          </MenuItem>
        ))}
      </Select>
    </HorizontalStack>
  );
};

export default SortBySelect;
