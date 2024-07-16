import { Box, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Box
      style={{
        height: "19vh",
        paddingTop: "1vh",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        marginTop: "auto", // Pushes footer to the bottom of the page
      }}
    >
      <Text size="sm">
        &copy; {new Date().getFullYear()} My Company Name. All rights reserved.
      </Text>
      <br />
      <Button onClick={() => handleNavigate("/privacy-policy")}>
        Privacy Policy
      </Button>
      {" | "}
      <Button onClick={() => handleNavigate("/terms-of-service")}>
        Terms of Service
      </Button>
    </Box>
  );
}

export default Footer;
