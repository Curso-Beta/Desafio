import {
  Button,
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Header() {
  const { isAuthenticated } = useContext(AuthContext);
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      px="6"
      align="center"
      mt={4}
    >
      <a href="/home">
        <Logo />
      </a>

      <SearchBox />

      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

      {isWideVersion && (
        <Flex align="center" ml="auto">
          <NotificationsNav />
          {isAuthenticated && <Profile showProfileData={isWideVersion} />}
          {!isAuthenticated && (
            <Button marginRight={2} colorScheme="white" variant="outline">
              <a href="/login">Fazer Login</a>
            </Button>
          )}
          {!isAuthenticated && (
            <Button marginLeft={2} colorScheme="green">
              <a href="/signup">Cadastre-se</a>
            </Button>
          )}
        </Flex>
      )}
    </Flex>
  );
}
