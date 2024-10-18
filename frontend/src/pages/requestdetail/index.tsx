import { useNavigate, useParams } from "react-router-dom"; // assuming you use react-router
import { Button } from "../../components/ui/button";
import { useDispatch } from "react-redux";
import { setBreadCrumb } from "../../store/slice/app";

const RequestDetail = () => {
    const dispatch = useDispatch();
    dispatch(setBreadCrumb([
        {
            title: "Dashboard",
            link: "/"

        },
        {
            title: "Request List Detail",
            link: "/request-detail/:id",
        },
    ]));
    const { id } = useParams<{ id: string }>(); 
    const navigate = useNavigate();
    const requestData = {
        id: "#1001",
        requester: "Nguyen A",
        requestType: "Electrical Repair",
        status: "Processing",
        dateSent: "05/10/2024",
        description: "Need to repair the light in the 1st floor hallway.",
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Information Required</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col">
                    <label className="text-gray-600">Request ID</label>
                    <div className="bg-gray-100 p-2 rounded">{requestData.id}</div>
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-600">Requester</label>
                    <div className="bg-gray-100 p-2 rounded">{requestData.requester}</div>
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-600">Request Type</label>
                    <div className="bg-gray-100 p-2 rounded">{requestData.requestType}</div>
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-600">Status</label>
                    <div className="bg-gray-100 p-2 rounded">{requestData.status}</div>
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-600">Date Sent</label>
                    <div className="bg-gray-100 p-2 rounded">{requestData.dateSent}</div>
                </div>

                <div className="flex flex-col col-span-2">
                    <label className="text-gray-600">Description</label>
                    <div className="bg-gray-100 p-2 rounded">{requestData.description}</div>
                </div>
            </div>

            <div className="flex justify-between">
                <Button variant="secondary"
                onClick={()=>navigate('/request')}
                >Back</Button>
                <div>
                    <Button variant="default" className="mr-2">Edit request</Button>
                    <Button variant="destructive">Delete request</Button>
                </div>
            </div>
        </div>
    );
};

export default RequestDetail;
