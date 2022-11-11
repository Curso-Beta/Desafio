import { Flex, Img, Text, useBreakpointValue } from "@chakra-ui/react";
import cursoBetaLogo from "../../assets/curso-beta-logo.png";

export function Logo() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex>
      <Img height="3rem" src={cursoBetaLogo} alt="Logotipo do Beta Cursos" />

      {isWideVersion && (
        <Text
          height="3rem"
          fontSize={["3sm", "3md", "3lg", "3xl"]}
          fontWeight="bold"
          letterSpacing="tight"
          ml="2"
          mr="6"
        >
          Curso Beta
        </Text>
      )}
    </Flex>
  );
}
