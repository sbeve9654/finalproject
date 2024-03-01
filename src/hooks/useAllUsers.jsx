import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query Users {
    users {
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

export default function useAllUsers() {
  const { data, loading, error } = useQuery(GET_USER);
  const users = data?.users;
  return [users, loading, error];
}
