import { gql, useMutation } from "@apollo/client";

const CREATE_ONE_USER = gql`
  mutation CreateOneUser($name: String!, $password: String!) {
    createOneUser(name: $name, password: $password) {
      id
      name
      password
    }
  }
`;

export default function useCreateOneUser() {
  const [createUserMutation, { loading, error }] = useMutation(CREATE_ONE_USER);
  const createUser = (
    { name, password },
    onCreateUserCompleted,
    onCreateUserError
  ) => {
    createUserMutation({ variables: { name, password } })
      .then(({ data }) => onCreateUserCompleted(data.createOneUser))
      .catch((error) => onCreateUserError(error));
  };
  return [createUser, loading, error];
}
