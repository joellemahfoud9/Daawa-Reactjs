interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: Props) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="fixed z-50 bottom-12 flex items-center">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-accent text-white rounded-md mr-2 disabled:bg-gray-300 hover:bg-opacity-90 focus:outline-amber-400"
        >
          Prev
        </button>

        <div className="flex space-x-2">
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page
                  ? "bg-accent text-white hover:bg-opacity-90 focus:outline-amber-400"
                  : "bg-white text-accent hover:bg-accent hover:bg-opacity-10"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-accent text-white rounded-md ml-2 disabled:bg-gray-300 hover:bg-opacity-90 focus:outline-amber-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
