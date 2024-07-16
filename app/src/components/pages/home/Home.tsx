import { Title, Text, Box } from "@mantine/core";

function Home() {
  return (
    <Box
      style={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Title order={1}>Home</Title>
      <Text>Welcome to the Home page!</Text>
    </Box>
  );
}

export default Home;
