import { Box, Button, Flex, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

export const NavBar = () => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery();
  let body = null;
  //data is loading
  if (fetching) {
    body = null;
    //user not logged in
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link color="white" p={4}>
            login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white" p={4}>
            register
          </Link>
        </NextLink>
      </>
    );
    //user is logged in
  } else {
    body = (
      <Flex>
        <Box mr={2}>{data.me.username}</Box>
        <Button
          onClick={() => {
            logout();
          }}
          isLoading={logoutFetching}
          variant="link"
          color="white"
        >
          logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex bg="grey" p={3}>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};
