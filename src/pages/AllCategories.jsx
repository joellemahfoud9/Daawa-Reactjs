import Sidebar from "../components/Services/Category/Sidebar";
import ListCategory from "../components/Services/Category/ListCategory";

function AllCategories() {
  return (
    <>
      <div className="min-h-screen bg-white flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <ListCategory />
        </div>
      </div>
    </>
  );
}
export default AllCategories;
