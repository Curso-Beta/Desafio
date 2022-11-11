import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  Spinner,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { Pagination } from "../Pagination";
import { Link } from "react-router-dom";
import { useCourses } from "../../services/hooks/useCourses";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { CardCourse } from "./CardCourse";

interface ListCoursesProps {
  title: string;
}

export function ListCourses({ title }: ListCoursesProps) {
  const { user, isAuthenticated } = useContext(AuthContext);
  const { data, isLoading, error } = useCourses();

  async function handlePrefetchCourse(CourseId: string) {
    await queryClient.prefetchQuery(
      ["Course", CourseId],
      async () => {
        const response = await api.get(`Course/${CourseId}`);

        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10,
      }
    );
  }

  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">
          {title}
        </Heading>
        {user?.role == "ADMIN" && (
          <Button
            as={Link}
            to="/dashboard/nova-Course"
            size="sm"
            fontSize="sm"
            colorScheme="green"
            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
          >
            Criar novo curso
          </Button>
        )}
      </Flex>

      {isLoading ? (
        <Flex justify="center">
          <Spinner />
        </Flex>
      ) : error ? (
        <Flex justify="center">
          <Text>Falha ao obter Cursos publicadas.</Text>
        </Flex>
      ) : (
        <>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
            {data!.map((Course) => {
              return (
                <CardCourse
                  key={Course.id}
                  category={Course.category}
                  description={Course.description}
                  name={Course.name}
                  url={Course.url}
                />
              );
            })}
          </SimpleGrid>

          <Pagination />
        </>
      )}
    </Box>
  );
}
