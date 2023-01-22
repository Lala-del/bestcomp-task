import { Box, Button } from "rebass/styled-components";
import { Label, Input } from "@rebass/forms";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const UserForm = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor="name">Name</Label>
        <Input
          {...register("name", { required: true })}
          id="name"
          name="name"
          type="text"
        />
      </Box>
      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor="email">Email</Label>
        <Input
          {...register("email", { required: true })}
          id="email"
          name="email"
          type="email"
        />
      </Box>
      <Button ml="5">
        {/* {isLoading ? <Loader type="ThreeDots" color="#fff" height={10}/> :  */}
        Submit
      </Button>
    </form>
  );
};
