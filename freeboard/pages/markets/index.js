import MarketListContainer from "../../src/components/units/markets/list/MarketsList.container";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

function MarketListPage() {
  return <MarketListContainer />;
}

export default withAuth(MarketListPage);
