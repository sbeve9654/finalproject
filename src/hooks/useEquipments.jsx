import { gql, useQuery } from "@apollo/client";

const GET_EQUIP = gql`
  query Equipments($name: String!) {
    oneequipment(name: $name) {
      category
      cost
      desc
      dimension
      disabled
      rarity
      values
      name
    }
  }
`;

export default function useEquipments(name) {
  const { data, loading, error } = useQuery(GET_EQUIP, {
    variables: { name },
  });
  const equipment = data?.oneequipment;
  return [equipment, loading, error];
}
