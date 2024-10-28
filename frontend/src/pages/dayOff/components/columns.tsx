import { CategoryType } from "../../../types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../../../components/ui/input";
import {
  useDeleteDayOffMutation,
  useApproveDayOffMutation,
  useUpdateDayOffMutation,
} from "../../../store/api/endpoints/dayOff";
import { Row } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { Checkbox } from "../../../components/ui/checkbox";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
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
import { Result } from "antd";
import React from "react";

// Tạo component riêng cho cell của cột actions
const ActionCell = ({ row }: { row: Row<CategoryType> }) => {
  const [deleteDayOff] = useDeleteDayOffMutation(); // Sử dụng hook trong component
  const [updateDayOff] = useUpdateDayOffMutation();

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const [formData, setFormData] = React.useState<{
    start_date: string;
    end_date: string;
    type: string;
    reason: string;
  }>({
    start_date: row.getValue("start_date") || "",
    end_date: row.getValue("end_date") || "",
    type: row.getValue("type") || "",
    reason: row.getValue("reason") || "",
  });

  const handleDelete = async (id: string) => {
    try {
      var result = await deleteDayOff(id).unwrap(); // Gọi hàm xóa và xử lý kết quả
      toast.success(result.message);
    } catch (error) {
      const errorMessage = result ?? "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  const handleEdit = async () => {
    try {
      var result = await updateDayOff({
        id: row.getValue("id"),
        ...formData,
      }).unwrap();
      toast.success("DayOff updated successfully!");
      setIsDialogOpen(false);
    } catch (error) {
      const errorMessage = result ?? "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(row.getValue("id"))}
        >
          Copy ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDelete(row.getValue("id"))}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogTitle>Edit DayOff</DialogTitle>
          <DialogDescription>
            Update the details for the selected day off.
          </DialogDescription>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit();
            }}
            className="mt-4"
          >
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
              placeholder="End date"
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
    </DropdownMenu>
  );
};

export const columns: ColumnDef<CategoryType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <div
          className=" flex items-center "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "employee_id",
    header: ({ column }) => {
      return (
        <div
          className=" flex items-center "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Employee ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "start_date",
    header: "Start date",
  },
  {
    accessorKey: "end_date",
    header: "End date",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "reason",
    header: "Reason",
  },
  {
    accessorKey: "is_approved",
    header: "Approve",
    cell: ({ row }) => {
      const isApproved = row.getValue("is_approved");
      var approvedName = "";
      var bgColor = "";
      if (isApproved === "1") {
        approvedName = "Approved";
        bgColor = "rgba(0, 255, 4, 0.536)";
      } else if (isApproved === "0") {
        approvedName = "Rejected";
        bgColor = "rgba(255, 0, 0, 0.418)";
      } else {
        approvedName = "Pending";
        bgColor = "rgba(118, 118, 118, 0.418)";
      }
      return (
        <div
          style={{
            backgroundColor: bgColor, // Màu đỏ trong suốt
            padding: "5px 0px", // Padding 2 bên (trên/dưới 10px, trái/phải 20px)
            textAlign: "center", // Căn giữa chữ
            width: "80%", // Độ rộng 500px
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          {approvedName}
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Action",
    cell: ({ row }) => <ActionCell row={row} />,
  },
];
