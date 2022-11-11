import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { ListCourses } from "./../components/Courses/ListCourses";

export function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <ListCourses title="Todos os Cursos" />
      </Flex>
    </Flex>
  );
}
