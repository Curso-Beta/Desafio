import {
  Flex,
  Box,
  Text,
  Badge,
  Heading,
  Button,
  AspectRatio,
} from "@chakra-ui/react";

interface ICardCourseProps {
  name: string;
  description: string;
  category: string;
  url: string;
}

export function CardCourse({
  name,
  description,
  category,
  url,
}: ICardCourseProps) {
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box
        bg={"gray.700"}
        w={"full"}
        h={"full"}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        px={3}
        py={5}
      >
        <AspectRatio>
          <iframe
            src="https://www.youtube.com/embed/watch?v=n5Q4Y5nLvrg"
            allowFullScreen
          />
        </AspectRatio>
        <Box p="5">
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
              {category}
            </Badge>
          </Box>
          <Heading fontSize={"2xl"} fontFamily={"body"} marginTop={2}>
            {name}
          </Heading>
          <Text color={"gray.300"} noOfLines={2}>
            {description}
          </Text>
        </Box>
        <Box p="5" display={"flex"} alignItems={"end"} gridArea="footer">
          <Button
            w={"full"}
            bg={"green.400"}
            color={"white"}
            rounded={"xl"}
            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
          >
            Acessar Curso
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
