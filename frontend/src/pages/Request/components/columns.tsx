import { ProductType } from "../../../types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { Checkbox } from "../../../components/ui/checkbox";
import { Row } from "antd";
import ActionCell from "../../../pages/requestdetail/components/ActionCell";

export const columns: ColumnDef<ProductType>[] = [
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
          Request ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },

  {
    accessorKey: "title",
    header: "Request Type",
  },
  {
    accessorKey: "title",
    header: "Status",
  },
  {
    accessorKey: "id",
    header: "Description",
  },
  {
    accessorKey: "title",
    header: "Solution",
  },
  {
    accessorKey: "actions",
    header: "Action",
    cell: ({ row }) => {
      return <ActionCell  rowId={row.getValue("id")} />;
    },
    
  },
  
];
