import { Link } from "react-router-dom";
import { User } from "../../models/User";
import { FaPen, FaTrash } from "react-icons/fa";
import DeleteConfirmDialog from "../../components/Admin/DeleteConfirmDialog";
import { useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useDeleteMultiple from "../../hooks/useDeleteMultiple";
import Pagination from "../../components/Admin/Pagination";
import AddFAB from "../../components/Admin/AddFAB";

const AdminUsersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, error, data } = useGetData<{
    total: number;
    pageSize: number;
    data: User[];
  }>(`users?page=${currentPage}`);

  /* DELETE MODAL LOGIC */
  const {
    deleteData,
    isLoading: isLoadingDelete,
    error: errorDelete,
    data: dataDelete,
  } = useDeleteData("users");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<User | null>(null);
  const handleDeleteClick = (item: User) => {
    setItemToDelete(item);
    setIsDeleteModalOpen(true);
  };
  const handleCancel = () => {
    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };
  const handleConfirmDelete = async () => {
    try {
      await deleteData(itemToDelete!.id);
      setIsDeleteModalOpen(false);
      setItemToDelete(null);
    } catch (error) {
      setIsDeleteModalOpen(false);
      setItemToDelete(null);
    }
  };
  useEffect(() => {
    if (dataDelete) {
      toast.success(`deleted successfully!`);
    }
    if (errorDelete) {
      toast.error(`Failed to delete. Please try again.`);
    }
  }, [dataDelete, errorDelete]);

  /* DELETE SELECTED */
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const handleCheckboxChange = (id: string) => {
    setSelectedUserIds((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((userId) => userId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };
  const handleUnselectAll = () => {
    setSelectedUserIds([]);
  };
  /* API DELETE SELECTED */
  const {
    deleteMultiple,
    isLoading: isLoadingDeleteMultiple,
    error: errorDeleteMultiple,
    data: dataDeleteMultiple,
  } = useDeleteMultiple("users");
  const [isDeleteMultipleModalOpen, setIsDeleteMultipleModalOpen] =
    useState(false);
  const handleConfirmDeleteMultiple = async () => {
    try {
      await deleteMultiple({ userIds: selectedUserIds });
      setIsDeleteMultipleModalOpen(false);
      setSelectedUserIds([]);
    } catch (error) {
      setIsDeleteModalOpen(false);
    }
  };
  useEffect(() => {
    if (dataDeleteMultiple) {
      toast.success(`deleted successfully!`);
    }
    if (errorDeleteMultiple) {
      toast.error(`Failed to delete. Please try again.`);
    }
  }, [dataDeleteMultiple, errorDeleteMultiple]);

  return (
    <>
      <ToastContainer />

      <DeleteConfirmDialog
        isOpen={isDeleteModalOpen}
        onCancel={handleCancel}
        onConfirm={handleConfirmDelete}
        details={itemToDelete?.name}
        isLoading={isLoadingDelete}
      />

      <DeleteConfirmDialog
        isOpen={isDeleteMultipleModalOpen}
        onCancel={() => setIsDeleteMultipleModalOpen(false)}
        onConfirm={handleConfirmDeleteMultiple}
        details={`${selectedUserIds.length} users`}
        isLoading={isLoadingDeleteMultiple}
      />

      <Pagination
        totalItems={data?.total || 0}
        itemsPerPage={data?.pageSize || 0}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <Link to={"/admin/users/new"}>
        <AddFAB />
      </Link>

      <main className="p-page flex flex-col mb-24">
        <h1 className="text-4xl font-bold">Users</h1>
        {selectedUserIds.length !== 0 ? (
          <div className="flex gap-4 self-end my-4">
            <button
              onClick={() => setIsDeleteMultipleModalOpen(true)}
              className="min-w-32 rounded px-4 py-1 bg-red-800"
            >
              <div className="flex items-center justify-center gap-2">
                <FaTrash color="white" />
                <span className="text-white">
                  {selectedUserIds.length} selected
                </span>
              </div>
            </button>
            <button
              onClick={handleUnselectAll}
              className="min-w-32 rounded px-3 py-1 bg-accent"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-white">unselect all</span>
              </div>
            </button>
          </div>
        ) : (
          <div className="my-4" />
        )}
        {isLoading ? (
          <span>Loading...</span>
        ) : error ? (
          <span>{error}</span>
        ) : data ? (
          <>
            <table className="admin-table">
              <thead>
                <tr>
                  <th></th>
                  <th>id</th>
                  <th>name</th>
                  <th>email</th>
                  <th>phone</th>
                  {/* <th>password</th> */}
                  <th>role</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <input
                        className="accent-accent"
                        type="checkbox"
                        checked={selectedUserIds.includes(user.id)}
                        onChange={() => handleCheckboxChange(user.id)}
                      />
                    </td>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    {/* <td>{user.password}</td> */}
                    <td>{user.role}</td>
                    <td>
                      <div className="flex justify-center gap-4">
                        <Link to={user.id} state={user}>
                          <button className="bg-blue-800 py-1 px-2 rounded">
                            <FaPen color="white" />
                          </button>
                        </Link>
                        <button
                          className="bg-red-800 py-1 px-2 rounded"
                          onClick={() => handleDeleteClick(user)}
                        >
                          <FaTrash color="white" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : null}
      </main>
    </>
  );
};

export default AdminUsersTable;
