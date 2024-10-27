import { setBreadCrumb } from "../../store/slice/app";
import { useDispatch } from "react-redux";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { LoadingLottie, EmptyLottie } from "../../components";
import {
  useGetAccountsQuery,
  useGetAccountQuery,
  useEditAccountMutation,
  useDeleteAccountMutation,
} from "../../store/api/endpoints/account";
import React, { useEffect, useMemo, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Navigate, useParams } from "react-router-dom";
import { Label } from "@radix-ui/react-label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { AccountData } from "@/types/accountData";

export const Accounts = () => {
  const dispatch = useDispatch();
  dispatch(
    setBreadCrumb([
      { title: "Dashboard", link: "/" },
      { title: "Accounts", link: "/accounts" },
    ])
  );
  const [page, setPage] = React.useState(1);
  const [page_size, setPageSize] = React.useState(10);
  const { data, isLoading } = useGetAccountsQuery({ page, page_size });

  if (isLoading) {
    return (
      <div className=" flex justify-center pt-10">
        <div className=" w-[250px] ">
          <LoadingLottie />
        </div>
      </div>
    );
  }
  const totalPages = Math.ceil((data?.meta.total ?? 0) / page_size);
  return (
    <div>
      <DataTable
        columns={columns}
        data={data?.data || []}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export const EditAccount = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [editAccount] = useEditAccountMutation();
  const { data: apiResponse, error, isLoading } = useGetAccountQuery(id);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      setBreadCrumb([
        { title: "Dashboard", link: "/" },
        { title: "Accounts", link: "/accounts" },
        { title: "Edit", link: id },
      ])
    );
  }, [dispatch, id]);

  const [formAccountData, setFormAccountData] = useState<AccountData>({
    name: apiResponse?.data.name || "",
    birth_date: apiResponse?.data.birth_date || "",
    email: apiResponse?.data.email || "",
    phone_number: apiResponse?.data.phone_number || "",
    role_id: apiResponse?.data.role_id || "",
    avatar: apiResponse?.data.avatar || null,
  });

  useEffect(() => {
    if (apiResponse) {
      setFormAccountData({
        name: apiResponse.data.name || "",
        birth_date: apiResponse.data.birth_date || "",
        email: apiResponse.data.email || "",
        phone_number: apiResponse.data.phone_number || "",
        role_id: apiResponse.data.role_id || "",
        avatar: apiResponse.data.avatar || null,
      });
    }
  }, [apiResponse]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name === "avatar") {
      const files = (e.target as HTMLInputElement).files;
      setFormAccountData({
        ...formAccountData,
        [name]: files && files.length > 0 ? files[0] : null,
      });
    } else {
      setFormAccountData({ ...formAccountData, [name]: value });
    }
  };

  const handleCancel = () => {
    navigate("/accounts");
  };

  const handleSubmitEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      var result = await editAccount({
        accountData: formAccountData,
        id,
      }).unwrap();
      console.log("Success:", result.message);
      toast.success(result.message);
      handleCancel();
    } catch (error) {
      const errorMessage = result ?? "An unexpected error occurred";
      toast.error(errorMessage);
      handleCancel();
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center pt-10">
        <div className="w-[250px]">
          <LoadingLottie />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center pt-10">
        <div className="w-[250px]">
          <EmptyLottie />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Update account</h1>
      <form onSubmit={handleSubmitEdit}>
        <div className="flex-1 min-w-[200px]">
          <Label className="block text-gray-700 font-semibold mb-1">Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formAccountData.name}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <Label className="block text-gray-700 font-semibold mb-1">
            Birthday
          </Label>
          <Input
            type="date"
            name="birth_date"
            value={formAccountData.birth_date}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
            required
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <Label className="block text-gray-700 font-semibold mb-1">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formAccountData.email}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
            required
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <Label className="block text-gray-700 font-semibold mb-1">
            Phone Number
          </Label>
          <Input
            type="text"
            name="phone_number"
            placeholder="Phone number"
            value={formAccountData.phone_number}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-4">
            <Avatar className="w-24 h-24">
              <AvatarImage
                src={"./image/" + formAccountData.avatar}
                alt={formAccountData.name}
                className="object-cover"
              />
              <AvatarFallback className="text-lg">
                {formAccountData.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full">
            <Label className="block text-gray-700 font-semibold mb-1">
              Avatar
            </Label>
            <Input
              type="file"
              name="avatar"
              className="mb-2 p-2 border border-gray-300 rounded w-full"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full">
          <Label className="block text-gray-700 font-semibold mb-1">Role</Label>
          <select
            name="role_id"
            value={formAccountData.role_id}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
            required
            onChange={handleChange}
          >
            <option value="1">Admin</option>
            <option value="2">Landlord</option>
            <option value="3">Apartment Manager</option>
            <option value="4">Staff</option>
            <option value="5">Resident</option>
          </select>
        </div>
        <div className="flex justify-end">
          <Button type="submit" variant="default">
            Update
          </Button>
          <Button onClick={handleCancel} variant="outline" className="ml-2">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export const DeleteAccount = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [deleteAccount] = useDeleteAccountMutation();
  const { data: apiResponse, error, isLoading } = useGetAccountQuery(id);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      setBreadCrumb([
        { title: "Dashboard", link: "/" },
        { title: "Accounts", link: "/accounts" },
        { title: "Delete", link: id },
      ])
    );
  }, [dispatch, id]);

  const [formAccountData, setFormAccountData] = useState<AccountData>({
    name: apiResponse?.data.name || "",
    birth_date: apiResponse?.data.birth_date || "",
    email: apiResponse?.data.email || "",
    phone_number: apiResponse?.data.phone_number || "",
    role_id: apiResponse?.data.role_id || "",
    avatar: apiResponse?.data.avatar || null,
  });

  useEffect(() => {
    if (apiResponse) {
      setFormAccountData({
        name: apiResponse.data.name || "",
        birth_date: apiResponse.data.birth_date || "",
        email: apiResponse.data.email || "",
        phone_number: apiResponse.data.phone_number || "",
        role_id: apiResponse.data.role_id || "",
        avatar: apiResponse.data.avatar || null,
      });
    }
  }, [apiResponse]);

  const handleCancel = () => {
    navigate("/accounts");
  };

  const handleSubmitDelete = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      var result = await deleteAccount(id).unwrap();
      console.log("Success:", result.message);
      toast.success(result.message);
      handleCancel();
    } catch (error) {
      const errorMessage = result ?? "An unexpected error occurred";
      toast.error(errorMessage);
      handleCancel();
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center pt-10">
        <div className="w-[250px]">
          <LoadingLottie />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center pt-10">
        <div className="w-[250px]">
          <EmptyLottie />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Delete account</h1>
      <form onSubmit={handleSubmitDelete}>
        <div className="flex-1 min-w-[200px]">
          <Label className="block text-gray-700 font-semibold mb-1">Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formAccountData.name}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
            disabled
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <Label className="block text-gray-700 font-semibold mb-1">
            Birthday
          </Label>
          <Input
            type="date"
            name="birth_date"
            value={formAccountData.birth_date}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
            disabled
          />
        </div>
        <div className="w-full">
          <Label className="block text-gray-700 font-semibold mb-1">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formAccountData.email}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
            disabled
          />
        </div>
        <div className="w-full">
          <Label className="block text-gray-700 font-semibold mb-1">
            Phone Number
          </Label>
          <Input
            type="text"
            name="phone_number"
            placeholder="Phone number"
            value={formAccountData.phone_number}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
            disabled
          />
        </div>
        <div className="w-full">
          <Label className="block text-gray-700 font-semibold mb-1">Role</Label>
          <Input
            name="role_id"
            value={formAccountData.role_id}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
            disabled
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" variant="default">
            Delete
          </Button>
          <Button onClick={handleCancel} variant="outline" className="ml-2">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
