import {
  ColumnDef,
  flexRender,
  ColumnFiltersState,
  useReactTable,
  SortingState,
  VisibilityState,
  getSortedRowModel,
  getPaginationRowModel,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import React from "react";
import { Plus } from "tabler-icons-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  page,
  setPage,
  totalPages,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const renderPageNumbers = () => {
    let pageButtons = [];

    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
          <Button
            key={i}
            variant={"outline"}
            size="lg"
            onClick={() => setPage(i)}
            style={{
              fontWeight: page === i ? "bold" : "normal",
              backgroundColor: page === i ? "#ff7f1d" : "transparent",
              color: page === i ? "#fff" : "#000",
            }}
          >
            {i}
          </Button>
        );
      }
    } else {
      if (page <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageButtons.push(
            <Button
              key={i}
              variant={"outline"}
              size="lg"
              onClick={() => setPage(i)}
              style={{
                fontWeight: page === i ? "bold" : "normal",
                backgroundColor: page === i ? "#ff7f1d" : "transparent",
                color: page === i ? "#fff" : "#000",
              }}
            >
              {i}
            </Button>
          );
        }
        pageButtons.push(
          <Button key="dots-start" variant="outline" size="lg">
            ...
          </Button>
        );

        pageButtons.push(
          <Button
            key={totalPages}
            variant={"outline"}
            size="lg"
            onClick={() => setPage(totalPages)}
          >
            {totalPages}
          </Button>
        );
      } else if (page > totalPages - 3) {
        pageButtons.push(
          <Button
            key={1}
            variant={"outline"}
            size="lg"
            onClick={() => setPage(1)}
            style={{
              fontWeight: page === 1 ? "bold" : "normal",
              backgroundColor: page === 1 ? "#ff7f1d" : "transparent",
              color: page === 1 ? "#fff" : "#000",
            }}
          >
            1
          </Button>
        );
        pageButtons.push(
          <Button key="dots-start" variant="outline" size="lg">
            ...
          </Button>
        );

        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageButtons.push(
            <Button
              key={i}
              variant={"outline"}
              size="lg"
              onClick={() => setPage(i)}
              style={{
                fontWeight: page === i ? "bold" : "normal",
                backgroundColor: page === i ? "#ff7f1d" : "transparent",
                color: page === i ? "#fff" : "#000",
              }}
            >
              {i}
            </Button>
          );
        }
      }
    }

    return pageButtons;
  };

  return (
    <>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <Button
          variant="outline"
          className="ml-auto"
          style={{
            fontWeight: "bold",
            backgroundColor: "#ff7f1d",
            color: "#fff",
          }}
        >
          <Plus size={18} strokeWidth={2} />
          Create new
        </Button>
      </div>
      <div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className=" dark:border-foreground "
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className=" dark:border-foreground "
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          {renderPageNumbers()}
          <Button
            variant="outline"
            size="lg"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
