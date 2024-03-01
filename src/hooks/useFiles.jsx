import { gql, useQuery } from "@apollo/client";

const GET_FILE = gql`
  query Files($filenum: Int!) {
    onefile(filenum: $filenum) {
      backpack
      health
      map
      mapxpos
      mapypos
      maxhealth
      level
      equipment {
        id
        name
        disabled
        itemxpos
        itemypos
        rotation
        values
      }
    }
  }
`;

export default function useFiles(filenum) {
  const { data, loading, error } = useQuery(GET_FILE, {
    variables: { filenum },
  });
  const files = data?.onefile;
  return [files, loading, error];
}
