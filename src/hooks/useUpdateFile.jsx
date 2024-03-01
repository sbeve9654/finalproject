import { gql, useMutation } from "@apollo/client";

const UPDATE_FILE = gql`
  mutation updatefile($id: Int!, $level: Int!, $health: Int!) {
    updatefile(id: $id, level: $level, health: $health) {
      id
      level
      health
    }
  }
`;

export default function useUpdateFile() {
  const [updatefile, { data, loading, error }] = useMutation(UPDATE_FILE);
  const updated = data?.updatefile;
  return [updatefile, updated, loading, error];
}
