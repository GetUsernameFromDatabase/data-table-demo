import type { TTableColumnData } from "../components/demo-table-columns";

import { storedHuntsmen } from "./data-huntsmen";
import { storedTransactions } from "./data-transactions";

export const storedTableData = storedTransactions.map<TTableColumnData>(
  (value) => {
    const huntsman = storedHuntsmen[value.huntsman_id];
    return {
      agreement_date: value.agreement_date,
      payment_to_huntsman: value.payment_to_huntsman,
      name: huntsman.name,
      hunting_licence: huntsman.hunting_licence,
    };
  },
);
