import { useProductAuth } from "../../../context/ProductAuthContractContext";
import { useToast } from "@chakra-ui/react";

export const useProductContractWrite = () => {
  const { productContract } = useProductAuth();
  const toast = useToast();

  const createProduct = async (name, manufacturer) => {
    try {
      const productId = await productContract.createProduct(name, manufacturer);

      toast({
        title: "Product creation transaction succeeded",
        position: "bottom-right",
        status: "success",
        isClosable: true,
      });
      return productId;
    } catch (exception) {
      toast({
        title: `${exception.message}`,
        position: "bottom-right",
        status: "error",
        isClosable: true,
      });
    }
  };

  const updateProduct = async (tokenId, history) => {
    try {
      await productContract.methods.updateProduct(tokenId, history).send({ from: productContract.defaultAccount });

      toast({
        title: "Product update transaction succeeded",
        position: "bottom-right",
        status: "success",
        isClosable: true,
      });
    } catch (exception) {
      toast({
        title: `${exception.message}`,
        position: "bottom-right",
        status: "error",
        isClosable: true,
      });
    }
  };

  const verifyProduct = async (tokenId) => {
    try {
      const result = await productContract.methods.verifyProduct(tokenId).call();

      toast({
        title: "Product verification transaction succeeded",
        position: "bottom-right",
        status: "success",
        isClosable: true,
      });
      return result;
    } catch (exception) {
      toast({
        title: `${exception.message}`,
        position: "bottom-right",
        status: "error",
        isClosable: true,
      });
    }
  };

  return { createProduct, updateProduct, verifyProduct };
};