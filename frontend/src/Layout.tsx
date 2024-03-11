import React, { ReactNode } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { useUser } from "./state/UserContext";
import { useNavigate } from "react-router-dom";

interface TopBarLayoutProps {
  children: ReactNode;
}

const Layout: React.FC<TopBarLayoutProps> = ({ children }) => {
  const { user, logoutUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };
  return (
    <Box>
      <Flex
        bg="#319795"
        p="4"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="xl" color="white" fontWeight="bold">
          ComplainCo
        </Text>
        {user && (
          <Button colorScheme="whiteAlpha" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Flex>
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
