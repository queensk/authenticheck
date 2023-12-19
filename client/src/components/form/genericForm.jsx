import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  manufacturer: "",
};

export const GenericForm = ({ handleSubmit, formType }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    manufacturer: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema: validationSchema,
  });

  return (
    <Flex bg="gray.100">
      <Box bg="white" p={10} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={6} align="flex-start">
            <Heading>New {formType}</Heading>
            <FormControl>
              <FormLabel htmlFor="name">Product Name</FormLabel>
              <Input
                id="name"
                name="name"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <Text color="tomato">{formik.errors.name}</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="manufacturer">Manufacturer</FormLabel>
              <Input
                id="manufacturer"
                name="manufacturer"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.manufacturer}
              />
              {formik.touched.manufacturer && formik.errors.manufacturer && (
                <Text color="tomato">{formik.errors.manufacturer}</Text>
              )}
            </FormControl>
            <Button type="submit" colorScheme="green" width="full">
              Create
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};