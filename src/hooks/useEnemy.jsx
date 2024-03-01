import { gql, useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { replaceEnemyhp } from "../features/state/enemy/enemySlice";

const GET_ENEMY = gql`
  query Layout($name: String!) {
    oneenemy(name: $name) {
      name
      health
    }
  }
`;

export default function useEnemy(name, id) {
  const dispatch = useDispatch();
  const { data, loading, error } = useQuery(GET_ENEMY, {
    variables: { name },

    onCompleted: ({ oneenemy }) => {
      const changehp = {
        id: id,
        hp: oneenemy[0].health,
      };
      console.log(oneenemy);
      dispatch(replaceEnemyhp(changehp));
      console.log(changehp);
    },
  });
  const enemy = data?.oneenemy;
  return [enemy, loading, error];
}
