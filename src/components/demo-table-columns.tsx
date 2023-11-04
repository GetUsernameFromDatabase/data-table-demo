import { createColumnHelper } from "@tanstack/react-table";
import { DateTime } from "luxon";

import type { THuntsMan } from "../data/data-huntsmen";
import type { TTransaction } from "../data/data-transactions";

import { Checkbox } from "./ui/checkbox";

import { Badge } from "@/components/ui/badge";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";

export type TTableColumnData = Pick<THuntsMan, "name" | "hunting_licence"> &
  Pick<TTransaction, "agreement_date" | "payment_to_huntsman">;

export const columnInformation: Record<
  keyof TTableColumnData,
  { label: string }
> = {
  name: { label: "Jahimehe Täisnimi" },
  agreement_date: { label: "Kokkuleppe Kuupäev" },
  hunting_licence: { label: "Jahitunnistus" },
  payment_to_huntsman: { label: "Tasu Jahimele" },
};

const columnHelper = createColumnHelper<TTableColumnData>();

// Would love to use `ColumnDef<TTableColumnData>[]` but that won't work with columnHelper.accessor
// https://github.com/TanStack/table/issues/4241
export const demoTableColumns = [
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor("name", {
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnInformation[column.id as keyof TTableColumnData].label}
      />
    ),
  }),
  columnHelper.accessor("hunting_licence", {
    header: "Jahitunnistus",
  }),
  columnHelper.accessor("agreement_date", {
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={columnInformation[column.id as keyof TTableColumnData].label}
      />
    ),
    cell: (properties) => {
      const value = DateTime.fromJSDate(properties.getValue() as Date);
      return <>{value.isValid ? value.toLocaleString() : "Puudulik Kuupäev"}</>;
    },
    invertSorting: true,
    enableResizing: true,
  }),
  columnHelper.accessor("payment_to_huntsman", {
    enableColumnFilter: true,
    header: columnInformation.payment_to_huntsman.label,
    cell: (properties) => {
      const value = properties.getValue();
      if (!Array.isArray(value)) return;
      return (
        <>
          {value.map((element, index) => (
            <Badge key={index} className="mx-1">
              {element}
            </Badge>
          ))}
        </>
      );
    },
  }),
];
