import { gql, useQuery } from "@apollo/client";

const GET_LAYOUT = gql`
  query Layout($id: Int!) {
    oneenemylayout(layoutid: $id) {
      layoutid
      enemies
    }
  }
`;

export default function useEnemyLayouts(id) {
  const { data, loading, error } = useQuery(GET_LAYOUT, {
    variables: { id },
  });
  const layout = data?.oneenemylayout;
  return [layout, loading, error];
}
