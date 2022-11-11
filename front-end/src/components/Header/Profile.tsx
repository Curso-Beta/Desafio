import {
  Flex,
  Avatar,
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { destroyCookie } from "nookies";
import { useContext } from "react";
import { AuthContext } from "./../../contexts/AuthContext";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  const { user } = useContext(AuthContext);

  function logout() {
    destroyCookie(null, "cursoBeta.token", {
      path: "/home",
    });
    window.location.reload();
  }

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{user?.name}</Text>
          <Text color="gray.300" fontSize="small">
            {user?.email}
          </Text>
        </Box>
      )}

      <Menu>
        <MenuButton>
          <Avatar size="md" name={user?.name} />
        </MenuButton>
        <MenuList bgColor={"gray.700"}>
          <MenuGroup title="Profile">
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem onClick={logout}>Sair</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
}
