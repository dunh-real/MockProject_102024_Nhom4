import { useGetRequestsQuery } from '../../../../store/api/endpoints/request';
import { setBreadCrumb } from '../../../../store/slice/app';
import React from 'react'
import { useDispatch } from 'react-redux';
import AddRequestForm from './components/AddRequestForm';

const Create = () => {
  const dispatch = useDispatch();
    dispatch(setBreadCrumb([
        {
            title: "Dashboard",
            link: "/"

        },
        {
            title: "Create Request",
            link: "/create",
        },
    ]));
    const { isLoading } = useGetRequestsQuery({});
  return (
    <div>
      <AddRequestForm/>
    </div>
  )
}

export default Create;