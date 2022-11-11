import { Icon, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import {
  RiHeartLine,
  RiNotificationLine,
  RiShoppingCartLine,
} from "react-icons/ri";
import { AuthContext } from "../../contexts/AuthContext";

export function NotificationsNav() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      {isAuthenticated && <Icon as={RiHeartLine} fontSize="20" />}
      <Icon as={RiShoppingCartLine} fontSize="20" />
      {isAuthenticated && <Icon as={RiNotificationLine} fontSize="20" />}
    </HStack>
  );
}
