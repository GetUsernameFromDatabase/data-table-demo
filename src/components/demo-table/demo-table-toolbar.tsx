import type { Table } from "@tanstack/react-table";
import { X } from "lucide-react";

import { Button } from "../ui/button";
import {
  DataTableFacetedFilter,
  type TFacetFilterOptions,
} from "../ui/data-table-faceted-filter";
import { DataTableViewOptions } from "../ui/data-table-view-options";
import { Input } from "../ui/input";

import { DemoTableAddEntry } from "./demo-table-add-entry";
import type { TTableColumnData } from "./demo-table-columns";

export interface TDemoTableToolbarProperties<TData> {
  table: Table<TData>;
  filterColumn: string;
  facetFilterColumns?: Partial<Record<keyof TData, TFacetFilterOptions[]>>;
  setTableData?: React.Dispatch<React.SetStateAction<TTableColumnData[]>>;
}

export function DemoTableToolbar<TData>({
  table,
  filterColumn,
  facetFilterColumns,
  setTableData,
}: TDemoTableToolbarProperties<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const inputFilterColumn = table.getColumn(filterColumn);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Otsi jahimeest..."
          value={(inputFilterColumn?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            inputFilterColumn?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Tühjenda otsing
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
        {facetFilterColumns &&
          Object.entries<(typeof facetFilterColumns)[keyof TData]>(
            facetFilterColumns,
          ).map(([key, value], index) => {
            const tableColumn = table.getColumn(key);
            if (!tableColumn) return;

            return (
              <DataTableFacetedFilter
                key={index}
                column={tableColumn}
                title={key}
                options={value!}
              />
            );
          })}
      </div>
      <DemoTableAddEntry
        setTableData={setTableData}
        triggerClassName="mx-4"
      ></DemoTableAddEntry>
      <DataTableViewOptions table={table} />
    </div>
  );
}
