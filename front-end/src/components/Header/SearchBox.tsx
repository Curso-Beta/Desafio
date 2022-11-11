import { Button, Flex, Icon, Input } from "@chakra-ui/react";
import { useCallback, useEffect, useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  //searchInputRef.current?.value

  const handleSubmit = useCallback(() => {
    console.log(searchInputRef.current?.value);
  }, []);

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.700"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        mr="4"
        placeholder="Buscar curso de interesse"
        _placeholder={{ color: "gray.400" }}
        ref={searchInputRef}
        onSubmit={handleSubmit}
      />

      <Icon
        as={RiSearchLine}
        fontSize="20"
        onClick={handleSubmit}
        type={"submit"}
      />
    </Flex>
  );
}
