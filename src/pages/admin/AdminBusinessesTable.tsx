import { useEffect, useState } from "react";
import { Business } from "../../models/Business";
import useGetData from "../../hooks/useGetData";
import Pagination from "../../components/Admin/Pagination";
import { Link } from "react-router-dom";
import FloatingActionButtonAdd from "../../components/Admin/AddFAB";
import { FaPen, FaTrash } from "react-icons/fa";
import useDeleteData from "../../hooks/useDeleteData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteConfirmDialog from "../../components/Admin/DeleteConfirmDialog";
import useDeleteMultiple from "../../hooks/useDeleteMultiple";
import AddFAB from "../../components/Admin/AddFAB";

const AdminBusinessesTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, error, data } = useGetData<{
    total: number;
    pageSize: number;
    data: Business[];
  }>(`businesses?page=${currentPage}`);

  /* DELETE MODAL LOGIC */
  const {
    deleteData,
    isLoading: isLoadingDelete,
    error: errorDelete,
    data: dataDelete,
  } = useDeleteData("businesses");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<Business | null>(null);
  const handleDeleteClick = (item: Business) => {
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
  } = useDeleteMultiple("businesses");
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

  // const {
  //   isLoading,
  //   error,
  //   data: businesses,
  // } = useGetData<{ data: Business[] }>("businesses");

  // const [businesses, setBusinesses] = useState<{ data: Business[] } | null>(
  //   null
  // );

  // const getBusinesses = async () => {
  //   const response = await fetch("https://daawa-api.vercel.app/businesses");
  //   setBusinesses(await response.json());
  // };

  // useEffect(() => {
  //   getBusinesses();
  // }, []);

  return (
    <>
      <ToastContainer />

      <Link to={"/admin/businesses/new"}>
        <AddFAB />
      </Link>

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
        details={`${selectedUserIds.length} businesses`}
        isLoading={isLoadingDeleteMultiple}
      />

      <Pagination
        totalItems={data?.total || 0}
        itemsPerPage={data?.pageSize || 0}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="p-page flex flex-col mb-24">
        <h1 className="text-4xl font-bold">Businesses</h1>
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <input
                        className="accent-accent"
                        type="checkbox"
                        checked={selectedUserIds.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>{item.description}</td>
                    <td>{item.category.name}</td>
                    <td>
                      <img className="w-12 h-12" src={item.image} />
                    </td>
                    <td>
                      <div className="flex justify-center gap-4">
                        <Link to={item.id} state={item}>
                          <button className="bg-blue-800 py-1 px-2 rounded">
                            <FaPen color="white" />
                          </button>
                        </Link>
                        <button
                          className="bg-red-800 py-1 px-2 rounded"
                          onClick={() => handleDeleteClick(item)}
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

export default AdminBusinessesTable;
