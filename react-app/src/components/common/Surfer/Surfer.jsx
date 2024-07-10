import React from "react";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import "./Surfer.css";

function Surfer({ path, destiny }) {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      color="white"
      onClick={() => navigate(path)}
      className="surfer-design"
    >
      {destiny}
    </Button>
  );
}

export default Surfer;
