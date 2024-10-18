import { LoadingLottie } from '../../components';
import { useGetRequestsQuery } from '../../store/api/endpoints/request';
import { setBreadCrumb } from '../../store/slice/app';
import React from 'react'
import { useDispatch } from 'react-redux';
import Employment from './components/Employment';

const ContractInformation = () => {
    const dispatch = useDispatch();
    dispatch(setBreadCrumb([
        {
            title: "Dashboard",
            link: "/"

        },
        {
            title: "ContractInformation",
            link: "/contractinformation",
        },
    ]));
    const { isLoading } = useGetRequestsQuery({});
    if (isLoading) {
        return (
            <div className=" flex justify-center pt-10">
                <div className=" w-[250px] ">
                    <LoadingLottie />
                </div>
            </div>
        );
    } else
        return (
            <div className='bg-gray-100 shadow-lg'>
                <Employment/>
            </div>
        )
}

export default ContractInformation;