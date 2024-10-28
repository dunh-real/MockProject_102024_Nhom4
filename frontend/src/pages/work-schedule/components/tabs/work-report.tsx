import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

const WorkReport: React.FC = () => {
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Create Work Report</h2>
            <div className="mb-4">
                <Input
                    type="text"
                    placeholder="Report title"
                    className="border border-gray-300 rounded-md p-2"
                />
            </div>
            <div className="mb-4">
                <Textarea
                    placeholder="Report detail"
                    className="border border-gray-300 rounded-md p-2"
                />
            </div>
            <Button className="text-white">Submit</Button>
        </div>
    );
}

export default WorkReport;
