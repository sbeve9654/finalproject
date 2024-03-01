import { gql, useMutation } from "@apollo/client";

const UPDATE_MYEQUIPMENTS = gql`
  mutation updatemyequipments(
    $updatemyequipmentsId: Int!
    $itemxpos: Int!
    $itemypos: Int!
    $rotation: Int!
  ) {
    updatemyequipments(
      id: $updatemyequipmentsId
      itemxpos: $itemxpos
      itemypos: $itemypos
      rotation: $rotation
    ) {
      id
      itemxpos
      itemypos
      name
      rotation
    }
  }
`;

export default function useUpdateMyEquipments() {
  const [updateEquipments, { data, loading, error }] =
    useMutation(UPDATE_MYEQUIPMENTS);
  const updated = data?.updatemyequipments;
  return [updateEquipments, updated, loading, error];
}
