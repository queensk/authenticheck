import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Text } from '@chakra-ui/react';
import { useProductContractWrite } from "../../data/hooks/contract/write/useProductContractWrite";

const UpdateProductPage = () => {
  const [tokenId, setTokenId] = useState('');
  const [history, setHistory] = useState('');
  const [updateResult, setUpdateResult] = useState(null);
  const { updateProduct } = useProductContractWrite();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateProduct(tokenId, history);
      setUpdateResult(true);
    } catch (error) {
      setUpdateResult(false);
    }
  };

  return (
    <Box p={5}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Product ID</FormLabel>
          <Input
            type="text"
            placeholder="Enter product ID"
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4} isRequired>
          <FormLabel>Product History</FormLabel>
          <Textarea
            placeholder="Enter updated product history"
            value={history}
            onChange={(e) => setHistory(e.target.value)}
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Update Product
        </Button>
      </form>
      {updateResult !== null && (
        <Text mt={4}>
          {updateResult ? 'Product update succeeded.' : 'Product update failed.'}
        </Text>
      )}
    </Box>
  );
};

export default UpdateProductPage;