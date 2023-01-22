import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { getUser, updateUser } from "../api";
import { Container } from "../shared/Container";
import { Flex, Box, Heading } from "rebass/styled-components";
// import Loader from "react-loader-spinner";
import { UserForm } from "../shared/UserForm";

export const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading, isError } = useQuery(
    ["user", { id }],
    getUser
  );

  const { mutateAsync, isLoading: isMutating } = useMutation(updateUser);

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data, id });
    navigate("/");
  };

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          {/* <Loader type="ThreeDots" color="#ccc" height={30} /> */}
        </Flex>
      </Container>
    );
  }
  if (isError) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          Error : {error.message}
        </Flex>
      </Container>
    );
  }
  return (
    <Container>
      <Box sx={{ py: 3 }}>
        <Heading sx={{ marginBottom: 3 }}>Update User</Heading>
        <UserForm
          defaultValues={data}
          onFormSubmit={onFormSubmit}
          isLoading={isMutating}
        />
      </Box>
    </Container>
  );
};
