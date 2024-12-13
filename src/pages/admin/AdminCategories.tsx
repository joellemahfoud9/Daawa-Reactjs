import { Link } from "react-router-dom";
import AddFAB from "../../components/Admin/AddFAB";
import useGetData from "../../hooks/useGetData";
import { Category } from "../../models/Business";
import { FaInfoCircle, FaPen, FaTools, FaTrash } from "react-icons/fa";
import { MdLabel, MdLineAxis, MdNewLabel, MdPageview } from "react-icons/md";
import { GiOpenFolder } from "react-icons/gi";
import useDeleteData from "../../hooks/useDeleteData";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import useDeleteMultiple from "../../hooks/useDeleteMultiple";
import DeleteConfirmDialog from "../../components/Admin/DeleteConfirmDialog";

const AdminCategories = () => {
  const { isLoading, error, data } = useGetData<{ data: Category[] }>(
    "categories"
  );

  /* DELETE MODAL LOGIC */
  const {
    deleteData,
    isLoading: isLoadingDelete,
    error: errorDelete,
    data: dataDelete,
  } = useDeleteData("categories");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<Category | null>(null);
  const handleDeleteClick = (item: Category) => {
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
  const [selectedCategoriesIds, setSelectedUserIds] = useState<string[]>([]);
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
  } = useDeleteMultiple("categories");
  const [isDeleteMultipleModalOpen, setIsDeleteMultipleModalOpen] =
    useState(false);
  const handleConfirmDeleteMultiple = async () => {
    try {
      await deleteMultiple({ userIds: selectedCategoriesIds });
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
        details={`${selectedCategoriesIds.length} categories`}
        isLoading={isLoadingDeleteMultiple}
      />

      <main className="p-page flex flex-col mb-24">
        <h1 className="text-4xl font-bold">Categories</h1>

        {selectedCategoriesIds.length !== 0 ? (
          <div className="flex gap-4 self-end my-4">
            <button
              onClick={() => setIsDeleteMultipleModalOpen(true)}
              className="min-w-32 rounded px-4 py-1 bg-red-800"
            >
              <div className="flex items-center justify-center gap-2">
                <FaTrash color="white" />
                <span className="text-white">
                  {selectedCategoriesIds.length} selected
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
          <table className="admin-table">
            <thead>
              <tr>
                <th></th>
                <th>name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((category) => (
                <tr key={category.id}>
                  <td>
                    <input
                      className="accent-accent"
                      type="checkbox"
                      checked={selectedCategoriesIds.includes(category.id)}
                      onChange={() => handleCheckboxChange(category.id)}
                    />
                  </td>
                  <td>{category.name}</td>
                  <td>
                    <div className="flex justify-center gap-4">
                      <Link to={category.id} state={category}>
                        <button className="bg-blue-800 py-1 px-2 rounded">
                          <FaPen color="white" />
                        </button>
                      </Link>
                      <button
                        className="bg-red-800 py-1 px-2 rounded"
                        onClick={() => handleDeleteClick(category)}
                      >
                        <FaTrash color="white" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}

        <Link to={"new"}>
          <AddFAB />
        </Link>
      </main>
    </>
  );
};

export default AdminCategories;
