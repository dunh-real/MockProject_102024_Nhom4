import { LoadingLottie } from "../../components";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { useGetDayOffsQuery } from "../../store/api/endpoints/dayOff";
import { useDispatch } from "react-redux";
import { setBreadCrumb } from "../../store/slice/app";
import React from "react";

const DayOff = () => {
  const dispatch = useDispatch();
  dispatch(
    setBreadCrumb([
      { title: "Dashboard", link: "/" },
      { title: "Day Off", link: "/dayoffs" },
    ])
  );
  const [page, setPage] = React.useState(1); // Trang hiện tại
  const [pageSize, setPageSize] = React.useState(10); // Số lượng mục mỗi trang
  const { data, isLoading } = useGetDayOffsQuery({ page, page_size: pageSize });
  if (isLoading) {
    return (
      <div className=" flex justify-center pt-10">
        <div className=" w-[250px] ">
          <LoadingLottie />
        </div>
      </div>
    );
  } else {
    // Số trang có thể có dựa trên tổng số mục từ API
    const totalPages = Math.ceil((data?.meta.total ?? 0) / pageSize);
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

export default DayOff;
