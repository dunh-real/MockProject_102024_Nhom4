import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { MoreHorizontal } from "lucide-react";

const ActionCell = ({ rowId }: { rowId: string }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center space-x-2">
      <Button className=" border  border-blue-400 text-blue-400" variant="ghost" onClick={() => navigate(`/request-detail/${rowId}`)}>
        View Detail
      </Button>
      <Button className="hover:bg-orange-400 hover:text-white border  border-blue-400 text-blue-400" variant="ghost" onClick={() => navigator.clipboard.writeText(rowId)}>
        Edit
      </Button>
      <Button className="hover:bg-red-500 border  border-red-500 hover:text-white text-red-500" variant="ghost" onClick={() => navigator.clipboard.writeText(rowId)}>
        Delete
      </Button>
    </div>
  );
};

export default ActionCell;
