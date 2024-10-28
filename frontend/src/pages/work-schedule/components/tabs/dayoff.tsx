import { DatePicker } from "antd";
import { Button } from "../../../../components/ui/button";
import { Textarea } from "../../../../components/ui/textarea";

const { RangePicker } = DatePicker;

const Dayoff: React.FC = () => {
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Request for a day off</h2>
            <div className="mb-4">
                <RangePicker
                    className="border border-gray-300 rounded-md 
                               hover:border-gray-500 focus:border-black focus:ring 
                               focus:ring-black-200 transition-colors duration-200"
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

export default Dayoff;
