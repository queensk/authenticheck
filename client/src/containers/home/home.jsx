import React, { useEffect } from 'react'
import { Box, Flex, Heading, Text, Spacer, Link, Button, Image } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useBalance } from "wagmi";
import { useNavigate } from "react-router";

export default function Home() {
  const { address } = useAccount();
  const navigate = useNavigate();
  useEffect(() => {
    if (address) {
      navigate("/create-product");
    }
  }, [address, navigate]);
  
  return (
    <Flex
      direction="column"
      align="center"
      h="100vh"
      bgGradient="linear(to-r, #0f2027, #203a43, #2c5364)"
    >
      <Box
        maxW="1200px"
        px={5}
        color="white"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        <Flex
          my={20}
          align="center"
          justify="space-between"
        >
          <Link href="#" fontSize="36px" fontWeight="bold" color="#f9d342" textDecoration="none">
            Product Auth
          </Link>
          {/* <Flex as="ul" align="center" listStyleType="none" m={0} p={0}>
            <Box as="li" mx={2}><Link href="#">Home</Link></Box>
            <Box as="li" mx={2}><Link href="#">How it works</Link></Box>
            <Box as="li" mx={2}><Link href="#">Features</Link></Box>
            <Box as="li" mx={2}><Link href="#">Contact</Link></Box>
            <Box as="li" mx={2}>
              <ConnectButton />
            </Box>
          </Flex> */}
        </Flex>
        <Heading as="h1" fontSize="64px" my={5}>
          Verify the authenticity of your products with blockchain
        </Heading>
        <Text fontSize="24px" mb={5}>
          Product Auth is a web 3 application that allows you to check the origin, quality, and ownership of any product using a smart contract on the Ethereum network.
        </Text>
        <Flex align="center" justify="center">
          <Button
            as={Link}
            href="/get-started"
            display="inline-block"
            p={4}
            borderRadius="5px"
            bg="#f9d342"
            color="black"
            fontSize="18px"
            fontWeight="bold"
            textDecoration="none"
            mr={5}
            border="1px solid #203a43"
          >
            Get started
          </Button>
          <Button
            as={Link}
            href="#"
            display="inline-block"
            p={4}
            borderRadius="5px"
            bg="transparent"
            color="#f9d342"
            fontSize="18px"
            fontWeight="bold"
            textDecoration="none"
            border="2px solid #f9d342"
          >
            Learn more
          </Button>
        </Flex>
        <Box position="absolute" right={0} top={0} bottom={0} w="50%" overflow="hidden">
          <Image src="/product.png" alt="Product image" w={500} h={500} />
        </Box>
      </Box>
    </Flex>
  )
}
