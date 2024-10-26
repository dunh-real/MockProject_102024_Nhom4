import { CategoryType } from "../../../../types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useDeleteDayOffMutation,
  useApproveDayOffMutation,
} from "../../../../store/api/endpoints/dayOff";
import { Row } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Result } from "antd";

// Tạo component riêng cho cell của cột actions
const ActionCell = ({ row }: { row: Row<CategoryType> }) => {
  const [deleteDayOff] = useDeleteDayOffMutation(); // Sử dụng hook trong component
  const [approveDayOff] = useApproveDayOffMutation();

  const handleDelete = async (id: string) => {
    try {
      var result = await deleteDayOff(id).unwrap(); // Gọi hàm xóa và xử lý kết quả
      toast.success(result.message);
    } catch (error) {
      const errorMessage = result ?? "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  const handleApprove = async (id: string, status: number) => {
    try {
      var result = await approveDayOff({ id, is_approved: status }).unwrap(); // Gọi API approve với trạng thái mới
      toast.success(result.message);
    } catch (error) {
      const errorMessage = result ?? "An unexpected error occurred";
      toast.error(errorMessage);
    }
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
        {row.getValue("is_approved") === "2" && (
          <>
            <DropdownMenuItem
              onClick={() => handleApprove(row.getValue("id"), 1)}
            >
              Approve
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleApprove(row.getValue("id"), 0)}
            >
              Reject
            </DropdownMenuItem>
          </>
        )}
        {row.getValue("is_approved") === "0" && (
          <DropdownMenuItem
            onClick={() => handleApprove(row.getValue("id"), 1)}
          >
            Approve
          </DropdownMenuItem>
        )}
        {row.getValue("is_approved") === "1" && (
          <DropdownMenuItem
            onClick={() => handleApprove(row.getValue("id"), 0)}
          >
            Reject
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>View Detail</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDelete(row.getValue("id"))}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
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
