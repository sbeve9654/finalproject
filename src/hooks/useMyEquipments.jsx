import { gql, useQuery } from "@apollo/client";

const GET_EQUIP = gql`
  query MyEquipments($id: ID!) {
    onemyequipment(id: $id) {
      id
      itemxpos
      itemypos
      rotation
    }
  }
`;

export default function useMyEquipments(id) {
  const { data, loading, error } = useQuery(GET_EQUIP, {
    variables: { id },
  });
  const myequipment = data?.onemyequipment;
  return [myequipment, loading, error];
}
