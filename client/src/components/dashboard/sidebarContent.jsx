import {
  Flex,
  Box,
  Text,
  CloseButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { LinkItem } from './linkItem';
import logo from "./logo1.png";
// check if address is linked to an account
import { useAccount, useBalance } from "wagmi";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const SidebarContent = ({ linkItems, onClose, ...rest }) => {
  const { address } = useAccount();
  const navigate = useNavigate();
  const borderColor = useColorModeValue("gray.200", "gray.700");
  useEffect(() => {
    if (!address) {
      navigate("/");
    }
  }, [address, navigate]);


  return (
    <Box
      borderRight="1px"
      borderRightColor={borderColor}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <img src={logo} alt="logo" />        
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {linkItems.map((link) => (
        <LinkItem key={link.name} icon={link.icon} pathName={link.path}>{link.name}</LinkItem>
      ))}
    </Box>
  );
};