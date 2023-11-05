import type { TTableColumnData } from "../components/demo-table/demo-table-columns";

import { storedHuntsmen } from "./data-huntsmen";
import { storedTransactions } from "./data-transactions";

import type { TDemoTableToolbarProperties } from "@/components/demo-table/demo-table-toolbar";

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

export const useDemoTableFacetFilter = (
  data: TTableColumnData[],
): TDemoTableToolbarProperties["facetFilterColumns"] => {
  const uniqueData: Record<
    keyof Pick<TTableColumnData, "payment_to_huntsman">,
    Set<string>
  > = {
    payment_to_huntsman: new Set(),
  };
  // Collect unique data
  for (const dataValue of data) {
    for (const paymentToHuntsman of dataValue.payment_to_huntsman)
      uniqueData.payment_to_huntsman.add(paymentToHuntsman);
  }
  return {
    payment_to_huntsman: [...uniqueData.payment_to_huntsman].map((value) => ({
      value: value,
    })),
  };
};
