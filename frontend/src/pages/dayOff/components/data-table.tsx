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
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import React from "react";
import { useCreateDayOffMutation } from "../../../store/api/endpoints/dayOff";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { message } from "antd";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  id: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  page,
  setPage,
  totalPages,
  id,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [openModal, setOpenModal] = React.useState(false); // State to control modal visibility
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

  const [createDayOff] = useCreateDayOffMutation();
  const [formData, setFormData] = React.useState({
    employee_id: id,
    start_date: "",
    end_date: "",
    type: "",
    reason: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      var result = await createDayOff(formData).unwrap();
      setOpenModal(false);
      toast.success(result.message);
    } catch (error) {
      // setOpenModal(false);
      const errorMessage = result ?? "An unexpected error occurred";
      toast.error(errorMessage);
      // console.log(formData);
      // console.log(errorMessage);
      // console.log(error);
    }
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

        <Dialog open={openModal} onOpenChange={setOpenModal}>
          <DialogTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Create
            </Button>
          </DialogTrigger>

          <DialogOverlay className="fixed inset-0 z-50 bg-black/20" />

          <DialogContent className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg">
            <DialogHeader>
              <DialogTitle className="text-lg font-medium">
                Create New Day Off Request
              </DialogTitle>
              {/* <DialogDescription className="mt-2 text-sm text-gray-500">
                Fill out the form below to create a new item.
              </DialogDescription> */}
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4">
              <Input
                type="date"
                name="start_date"
                placeholder="Start date"
                value={formData.start_date}
                onChange={handleChange}
                className="mb-2"
                required
              />
              <Input
                type="date"
                name="end_date"
                placeholder="End_date"
                value={formData.end_date}
                onChange={handleChange}
                className="mb-2"
                required
              />
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="mb-2 p-2 border rounded w-full"
                required
              >
                <option value="" hidden>
                  Select Leave Type
                </option>
                <option value="sick leave">Sick Leave</option>
                <option value="vacation leave">Vacation Leave</option>
                <option value="other">Other</option>
              </select>
              <textarea
                name="reason"
                placeholder="Reason"
                value={formData.reason}
                onChange={handleChange}
                className="mb-4 p-2 border rounded w-full"
                rows={6}
              />

              <div className="flex justify-end">
                <Button type="submit" variant="default">
                  Submit
                </Button>
                <DialogClose asChild>
                  <Button variant="outline" className="ml-2">
                    Cancel
                  </Button>
                </DialogClose>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-2">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
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
            size="sm"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span>
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
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
