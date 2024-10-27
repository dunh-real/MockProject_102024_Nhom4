import { CategoryType } from "../../../types";
import { ColumnDef, Row } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
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

const ActionsDropdown = ({ row }: { row: Row<CategoryType> }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/accounts/edit/${row.original.id}`);
  };

  const handleDelete = () => {
    navigate(`/accounts/delete/${row.original.id}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View detail</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<CategoryType>[] = [
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
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => {
      return (
        <Avatar>
          <AvatarImage src={"./image/" + row.getValue("avatar")} />
          <AvatarFallback>
            {(row.getValue("name") as any).slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role_id",
    header: "Role",
    cell: ({ row }) => {
      const roleId = row.getValue("role_id") as string;
      const roleNames: { [key: string]: string } = {
        "1": "Admin",
        "2": "Landlord",
        "3": "Apartment Manager",
        "4": "Staff",
        "5": "Resident",
      };

      return roleNames[roleId];
    },
  },
  {
    accessorKey: "actions",
    header: "Action",
    cell: ({ row }) => <ActionsDropdown row={row} />,
  },
];
