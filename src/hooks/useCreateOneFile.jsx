import { gql, useMutation } from "@apollo/client";

const CREATE_ONE_FILE = gql`
  mutation CreateOneFile($playerId: Int!) {
    createOneFile(playerId: $playerId) {
      id
      playerId
    }
  }
`;

export default function useCreateOneFile() {
  const [createFileMutation, { loading, error }] = useMutation(CREATE_ONE_FILE);
  const createFile = (
    { playerId },
    onCreateFileCompleted,
    onCreateFileError
  ) => {
    createFileMutation({
      variables: {
        playerId,
        level: 1,
        mapxpos: 0,
        mapypos: 0,
        health: 40,
        maxhealth: 40,
        map: 1,
        backpack:
          '{"0":[0,0,0,0,0,0,0],"1":[0,0,1,1,1,0,0],"2":[0,0,1,1,1,0,0],"3":[0,0,1,1,1,0,0],"4":[0,0,0,0,0,0,0]}',
        equipment: {
          create: [
            {
              name: "wooden sword",
              disabled: false,
              itemxpos: 4,
              itemypos: 1,
              rotation: 2,
            },
            {
              name: "wooden shield",
              disabled: false,
              itemxpos: 2,
              itemypos: 2,
              rotation: 0,
            },
          ],
        },
      },
    })
      .then(({ data }) => onCreateFileCompleted(data.createOneFile))
      .catch((error) => onCreateFileError(error));
  };
  return [createFile, loading, error];
}
