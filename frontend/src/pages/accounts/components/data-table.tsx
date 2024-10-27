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
import { Password, Plus } from "tabler-icons-react";
import { useCreateAccountMutation } from "../../../store/api/endpoints/account";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Label } from "@radix-ui/react-dropdown-menu";
import { AccountData } from "@/types/accountData";

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
  const [openModal, setOpenModal] = React.useState(false);
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

  const initialAccountData = {
    name: "",
    birth_date: "",
    email: "",
    phone_number: "",
    role_id: "1",
    avatar: null,
    username: "",
    password: "",
  };

  const [createAccount] = useCreateAccountMutation();
  const [accountData, setAccountData] =
    React.useState<AccountData>(initialAccountData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name === "avatar") {
      const files = (e.target as HTMLInputElement).files;
      setAccountData({
        ...accountData,
        [name]: files && files.length > 0 ? files[0] : null,
      });
    } else {
      setAccountData({ ...accountData, [name]: value });
    }
  };

  const handleSubmitCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      var result = await createAccount(accountData).unwrap();
      setOpenModal(false);
      setAccountData(initialAccountData);
      toast.success(result.message);
    } catch (error) {
      const errorMessage = result ?? "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

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
      if (page <= 4) {
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
      }
      if (page > 4 && page < totalPages - 2) {
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
          <Button key="dots-startt" variant="outline" size="lg">
            ...
          </Button>
        );

        for (let i = page - 1; i <= page + 1; i++) {
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
      }
      if (page >= totalPages - 2 && page <= totalPages) {
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

        for (let i = totalPages - 2; i <= totalPages; i++) {
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

        <Dialog open={openModal} onOpenChange={setOpenModal}>
          <DialogTrigger asChild>
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
          </DialogTrigger>

          <DialogOverlay className="fixed inset-0 z-50 bg-black/20" />

          <DialogContent className="fixed left-1/2 top-1/2 z-50 w-[100vw] max-w-[950px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg">
            <DialogHeader>
              <DialogTitle className="text-lg font-medium">
                Create new account
              </DialogTitle>
            </DialogHeader>

            <div className="overflow-y-auto h-96">
              <form onSubmit={handleSubmitCreate} className="mt-4">
                <div className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-md shadow-lg">
                  <div className="flex-1 min-w-[200px]">
                    <Label className="block text-gray-700 font-semibold mb-1">
                      Name
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={accountData.name}
                      onChange={handleChange}
                      className="mb-2 p-2 border border-gray-300 rounded w-full"
                      required
                    />
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <Label className="block text-gray-700 font-semibold mb-1">
                      Birthday
                    </Label>
                    <Input
                      type="date"
                      name="birth_date"
                      value={accountData.birth_date}
                      onChange={handleChange}
                      className="mb-2 p-2 border border-gray-300 rounded w-full"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <Label className="block text-gray-700 font-semibold mb-1">
                      Email
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={accountData.email}
                      onChange={handleChange}
                      className="mb-2 p-2 border border-gray-300 rounded w-full"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <Label className="block text-gray-700 font-semibold mb-1">
                      Phone Number
                    </Label>
                    <Input
                      type="text"
                      name="phone_number"
                      placeholder="Phone number"
                      value={accountData.phone_number}
                      onChange={handleChange}
                      className="mb-2 p-2 border border-gray-300 rounded w-full"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <Label className="block text-gray-700 font-semibold mb-1">
                      Avatar
                    </Label>
                    <Input
                      type="file"
                      name="avatar"
                      onChange={handleChange}
                      className="mb-2 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>

                  <div className="w-full">
                    <Label className="block text-gray-700 font-semibold mb-1">
                      Username
                    </Label>
                    <Input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={accountData.username}
                      onChange={handleChange}
                      className="mb-2 p-2 border border-gray-300 rounded w-full"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <Label className="block text-gray-700 font-semibold mb-1">
                      Password
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={accountData.password}
                      onChange={handleChange}
                      className="mb-2 p-2 border border-gray-300 rounded w-full"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <Label className="block text-gray-700 font-semibold mb-1">
                      Role
                    </Label>
                    <select
                      name="role_id"
                      value={accountData.role_id}
                      onChange={handleChange}
                      className="mb-2 p-2 border border-gray-300 rounded w-full"
                      required
                    >
                      <option value="1">Admin</option>
                      <option value="2">Landlord</option>
                      <option value="3">Apartment Manager</option>
                      <option value="4">Staff</option>
                      <option value="5">Resident</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" variant="default">
                    Save
                  </Button>
                  <DialogClose asChild>
                    <Button variant="outline" className="ml-2">
                      Cancel
                    </Button>
                  </DialogClose>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>
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
