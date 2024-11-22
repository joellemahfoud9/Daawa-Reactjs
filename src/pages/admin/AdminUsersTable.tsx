import { Link } from "react-router-dom";
import FloatingActionButtonAdd from "../../components/Admin/FloatingActionButtonAdd";
import { User } from "../../models/User";
import { FaPen, FaTrash } from "react-icons/fa";
import DeleteConfirmDialog from "../../components/Admin/DeleteConfirmDialog";
import { useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminUsersTable = () => {
  const { isLoading, error, data } = useGetData<{ data: User[] }>("users");

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

      <Link to={"/admin/users/new"}>
        <FloatingActionButtonAdd />
      </Link>

      <main className="p-page">
        <div>UsersTable</div>
        {isLoading ? (
          <span>Loading...</span>
        ) : error ? (
          <span>{error}</span>
        ) : data ? (
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
                    <input type="checkbox" />
                  </td>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  {/* <td>{user.password}</td> */}
                  <td>{user.role}</td>
                  <td>
                    <div className="flex justify-center gap-8">
                      <button>
                        <FaPen color="darkblue" />
                      </button>
                      <button onClick={() => handleDeleteClick(user)}>
                        <FaTrash color="darkred" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </main>
    </>
  );
};

export default AdminUsersTable;
