import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useProductContractWrite } from "../../data/hooks/contract/write/useProductContractWrite";


const VerifyProductPage = () => {
  const [tokenId, setTokenId] = useState('');
  const [isAuthentic, setIsAuthentic] = useState(null);
    const { verifyProduct } = useProductContractWrite();

  const handleVerify = async () => {
    const result = await verifyProduct(tokenId)
    setIsAuthentic(result);
  };

  return (
    <Box>
      <FormControl id="token-id">
        <FormLabel>Product Token ID</FormLabel>
        <Input type="text" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
      </FormControl>
      <Button onClick={handleVerify}>Verify Product</Button>
      {isAuthentic !== null && (
        <Text>
          The product is {isAuthentic ? 'authentic' : 'not authentic'}.
        </Text>
      )}
    </Box>
  );
};

export default VerifyProductPage;