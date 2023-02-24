import { MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import HorizontalStack from "./util/HorizontalStack";

const ContentSelect = () => {
  const [content, setContent] = useState("post");

  return (
    <div className="flex items-center space-x-1">
      <Typography className="text-base">Content:</Typography>
      <Select
        size="small"
        value={content}
        className="w-40"
        onChange={(e) => setContent(e.target.value)}
        inputProps={{ className: "py-1" }}
      >
        <MenuItem color='secondary' value={"post"}>Posts</MenuItem>
        <MenuItem value={"comment"}>Comments</MenuItem>
      </Select>
    </div>
  );
};

export default ContentSelect;
