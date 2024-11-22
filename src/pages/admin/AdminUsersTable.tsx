import { Link } from "react-router-dom";
import FloatingActionButtonAdd from "../../components/Admin/FloatingActionButtonAdd";
import useApi from "../../hooks/useApi";
import { User } from "../../models/User";

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
              </tr>
            </thead>
            <tbody>
              {data.data.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  {/* <td>{user.password}</td> */}
                  <td>{user.role}</td>
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
