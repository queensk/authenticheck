import { Container } from "@chakra-ui/react";
import {React, useState} from "react";
import { useProductContractWrite } from "../../data/hooks/contract/write/useProductContractWrite";
import { GenericForm } from "../../components/form/genericForm";
import { Loading } from "../../components/loading/loading";
import { useNavigate } from "react-router";

export const CreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const { createProduct } = useProductContractWrite();
  const navigation = useNavigate();

  const handleSubmit = async (values) => {
    setLoading(true);

    await createProduct(values.name, values.manufacturer);

    setLoading(false);
    // navigation(`/history`);
  };

  return loading ? (
    <Loading />
  ) : (
    <Container m={3} mt={10}>
        <GenericForm
          handleSubmit={handleSubmit}
          formType={"Product"}
        />
    </Container>
  );
};
