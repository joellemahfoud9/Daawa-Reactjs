import { useEffect, useState } from "react";
import usePostData from "../hooks/usePostData";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

const Login = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { postData, isLoading, error, data } = usePostData({
    endpoint: "login",
    body: formData,
  });

  useEffect(() => {
    console.log("data:", data);

    if (data && data.token) {
      setCookie("token", data.token, { path: "/" });
      if (data.role) {
        login(data.role);
        navigate(data.role === "ADMIN" ? "/admin" : "/");
      } else {
        console.error("Role is missing in login response.");
      }

      setFormData({
        email: "",
        password: "",
      });
    }
  }, [data, setCookie, navigate, login]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postData();
    } catch (err) {
      console.log("Login failed:", err);
    }
  };

  return (
    <main className="p-page flex justify-center items-center min-h-[70vh]">
      <div className="border flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="my-auto w-1/2 h-96 hidden md:block">
          <img
            src="daawa-col.png"
            alt="daawa logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
          <h1 className="text-4xl font-bold mb-8">Login</h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <input
              className="border text-lg p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              className="border text-lg p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white text-lg p-3 rounded w-full hover:bg-blue-600 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
            <span className="self-center">
              Don't have an account?{" "}
              <Link className="text-blue-600" to={"/register"}>
                Register
              </Link>
            </span>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;