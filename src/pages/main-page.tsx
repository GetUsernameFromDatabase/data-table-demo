import type { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";

import {
  type TTableColumnData,
  demoTableColumns,
} from "@/components/demo-table/demo-table-columns";
import { DemoTableToolbar } from "@/components/demo-table/demo-table-toolbar";
import { PageWrapper } from "@/components/page-wrapper";
import { DataTable } from "@/components/ui/data-table";
import {
  storedTableData,
  useDemoTableFacetFilter,
} from "@/data/data-demo-table";

export function MainPage() {
  const [localTableData, setLocalTableData] = useState([...storedTableData]);

  const demoFacetFilter = useDemoTableFacetFilter(localTableData);
  return (
    <PageWrapper>
      <DataTable
        columns={demoTableColumns as ColumnDef<TTableColumnData>[]}
        data={localTableData}
        toolbar={(table) =>
          DemoTableToolbar({
            table,
            filterColumn: "name",
            setTableData: setLocalTableData,
            facetFilterColumns: demoFacetFilter,
          })
        }
      ></DataTable>
    </PageWrapper>
  );
}
