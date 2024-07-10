import { Button, Box, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../../MyContextProvider";

function Header() {
  const navigate = useNavigate();
  const { token, clearToken } = useMyContext(); // Assuming you have set up context for token management

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    clearToken(); // Clear the token from context on logout
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <Box
      style={{
        height: "10vh",
        borderBottom: "1px solid #eaeaea",
        width: "100vw",
        display: "flex",
        justifyContent: "end", // Adjusted to space between
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Group p="apart">
        <Button
          style={{ marginRight: "3vw" }}
          onClick={() => handleNavigate("/")}
        >
          Home
        </Button>
        {!token && ( // Render login button if token is not set
          <Button
            style={{ marginRight: "3vw" }}
            onClick={() => handleNavigate("/login")}
          >
            Login
          </Button>
        )}
        {token && ( // Render recipes and logout button if token is set
          <>
            <Button
              style={{ marginRight: "3vw" }}
              onClick={() => handleNavigate("/recipes")}
            >
              Recipes
            </Button>
            <Button style={{ marginRight: "3vw" }} onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
      </Group>
    </Box>
  );
}

export default Header;
