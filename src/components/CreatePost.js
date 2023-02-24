import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const CreatePost = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outlined"
      color='secondary'
      size="medium"
      onClick={() => navigate("/posts/create")}
      className="flex items-center gap-2 whitespace-nowrap"
    >
      <AiOutlinePlus className="flex-shrink-0" />
      <span>New Post</span>
    </Button>
  );
};

export default CreatePost;
