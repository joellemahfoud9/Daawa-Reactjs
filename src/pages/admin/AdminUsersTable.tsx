import { Link } from "react-router-dom";
import FloatingActionButtonAdd from "../../components/Admin/FloatingActionButtonAdd";
import useApi from "../../hooks/useApi";
import { User } from "../../models/User";
import { FaPen, FaTrash } from "react-icons/fa";

const AdminUsersTable = () => {
  const { isLoading, error, data } = useApi<{ data: User[] }>("users");
  return (
    <>
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
                    <div className="flex justify-center gap-4">
                      <button>
                        <FaPen color="darkblue" />
                      </button>
                      <button>
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
