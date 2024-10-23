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

export const columns: ColumnDef<any>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <div className="flex items-center" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                ID <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
        ),
    },
    {
        accessorKey: "start_date",
        header: "Start Date",
    },
    {
        accessorKey: "end_date",
        header: "End Date",
    },
    {
        accessorKey: "position",
        header: "Position",
    },
    {
        accessorKey: "employee_id",
        header: "Employee ID",
    },
    {
        accessorKey: "actions",
        header: "Action",
        cell: ({ row }) => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.getValue("id"))}>
                        Copy ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View Detail</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    },
];
