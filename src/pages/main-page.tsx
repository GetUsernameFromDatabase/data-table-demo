import { useState } from "react";

import { demoTableColumns } from "@/components/demo-table-columns";
import { DemoTableToolbar } from "@/components/demo-table-toolbar";
import { PageWrapper } from "@/components/page-wrapper";
import { DataTable } from "@/components/ui/data-table";
import { storedTableData } from "@/data";

export function MainPage() {
  const [localTableData, setLocalTableData] = useState([...storedTableData]);

  return (
    <PageWrapper>
      <DataTable
        columns={demoTableColumns}
        data={localTableData}
        toolbar={(table) =>
          DemoTableToolbar({
            table,
            filterColumn: "name",
            setTableData: setLocalTableData,
          })
        }
      ></DataTable>
    </PageWrapper>
  );
}
