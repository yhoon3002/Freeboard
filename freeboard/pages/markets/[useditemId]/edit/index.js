import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import MarketsCreateContainer from "../../../../src/components/units/markets/create/MarketsCreate.container";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
      seller {
        name
        picture
      }
    }
  }
`;

export default function MarketsEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  return <MarketsCreateContainer isEdit={true} data={data} />;
}
