interface Props {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  details?: string;
  isLoading?: boolean;
}

const DeleteConfirmDialog = ({
  isOpen,
  onCancel,
  onConfirm,
  details,
  isLoading = false,
}: Props) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">
          !!! Delete {details || ""} ? !!!
        </h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            disabled={isLoading}
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 rounded-lg text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmDialog;
