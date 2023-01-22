import { useQuery } from "react-query";
import { getAllUsers } from "../api";
import { Container } from "../shared/Container";
import { Flex } from "rebass/styled-components";
import { User } from "./User";
// import Loader from "react-loader-spinner";

export const PeopleList = () => {
  const { data, error, isLoading, isError } = useQuery("users", getAllUsers);

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          {/* <Loader type='ThreeDots' color='#ccc' height={30}/> */}
        </Flex>
      </Container>
    );
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <Container>
      <Flex flexDirection="column" alignItems="center">
        {data.map(({ name, username, email, address, id }) => (
          <User
            name={name}
            username={username}
            email={email}
            key={id}
            id={id}
          />
        ))}
      </Flex>
    </Container>
  );
};
