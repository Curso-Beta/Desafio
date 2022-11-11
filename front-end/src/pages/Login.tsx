import { Box, Flex } from "@chakra-ui/react";
import { parseCookies } from "nookies";
import { Header } from "../components/Header";
import { LoginForm } from "./../components/LoginForm";

export function Login() {
  return (
    <Box h="100vh">
      <Header />

      <Flex maxWidth="35rem" margin="2rem auto">
        <LoginForm />
      </Flex>
    </Box>
  );
}
