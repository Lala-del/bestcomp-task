import { UserForm, Container } from "../shared";
import { Box, Heading } from "rebass/styled-components";
import { createUser } from "../api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export const CreateUser = () => {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation(createUser);

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data });
    navigate("/");
  };
  return (
    <Container>
      <Box
        sx={{
          py: 3,
        }}
      >
        <Heading sx={{ marginBottom: 3 }}>Create New User</Heading>
        <UserForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
      </Box>
    </Container>
  );
};
