import { useGetRequestsQuery } from "../../store/api/endpoints/request";
import { setBreadCrumb } from "../../store/slice/app";
import { useDispatch } from 'react-redux';
import { LoadingLottie } from "../../components";
import { DataTable } from "./components/data-table";
import { columns } from "../../pages/Request/components/columns";
const Request = () => {
    const dispatch = useDispatch();
    dispatch(setBreadCrumb([
        {
            title: "Dashboard",
            link: "/"

        },
        {
            title: "Request List",
            link: "/request",
        },
    ]));
    const { data, isLoading } = useGetRequestsQuery({});
    if (isLoading) {
        return (
            <div className=" flex justify-center pt-10">
                <div className=" w-[250px] ">
                    <LoadingLottie />
                </div>
            </div>
        );
    }
    else{
        return (
            <DataTable columns={columns} data={data} />
        );
    }
}

export default Request

