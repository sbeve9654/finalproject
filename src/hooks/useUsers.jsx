import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query Users($name: String!) {
    oneuser(name: $name) {
      id
      name
      password
      files {
        id
        level
        mapxpos
        mapypos
        health
        maxhealth
      }
    }
  }
`;

export default function useUsers(name) {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { name },
  });
  const users = data?.oneuser;
  return [users, loading, error];
}
