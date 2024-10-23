import { setBreadCrumb } from "../../store/slice/app";
import { useDispatch } from "react-redux";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { LoadingLottie } from "../../components";
import { useGetStaffsQuery } from "../../store/api/endpoints/staff";
import React from "react";

const Staff = () => {
  const dispatch = useDispatch();
  dispatch(
    setBreadCrumb([
      { title: "Dashboard", link: "/" },
      { title: "Staff Management", link: "/staffManagement" },
    ])
  );
  const [page, setPage] = React.useState(1);
  const [page_size, setPageSize] = React.useState(2);
  const { data, isLoading } = useGetStaffsQuery({ page, page_size });
  if (isLoading) {
    return (
      <div className=" flex justify-center pt-10">
        <div className=" w-[250px] ">
          <LoadingLottie />
        </div>
      </div>
    );
  } else {
    const totalPages = Math.ceil((data?.meta.total ?? 0) / page_size);
    return (
      <DataTable
        columns={columns}
        data={data?.data || []}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    );
  }
};

export default Staff;
