
import { useEffect, useState } from "react";
import usePostData from "../hooks/usePostData";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const { postData, isLoading, error, data } = usePostData({
    endpoint: `register`,
    body: { ...formData, role: isAdmin ? "ADMIN" : "USER" },
  });

  useEffect(() => {
    if (data && data.token) {
      setCookie("token", data.token, { path: "/" });
      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
      });
      console.log("Registration successful! Token stored in cookies.");
      navigate(isAdmin ? "/admin" : "/");
    }
  }, [data, setCookie, isAdmin]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const updatedFormData = {
      ...formData,
      role: isAdmin ? "ADMIN" : "USER",
    };
  
    console.log("Updated Form Data:", updatedFormData); 
  
    try {
      await postData();
    } catch (err) {
      console.log("Registration failed:", err);
    }
  };
  

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAdmin(e.target.checked);
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
          <h1 className="text-4xl font-bold mb-8">Register</h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <input
              className="border text-lg p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
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
            <input
              className="border text-lg p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="phone"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                id="adminCheck"
                className="mr-2"
                checked={isAdmin}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="adminCheck">Register as Admin</label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white text-lg p-3 rounded w-full hover:bg-blue-600 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Register"}
            </button>
            <span className="self-center">
              already have an account? {" "}
              <Link className="text-blue-600" to={"/login"}>
                login
              </Link>
            </span>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
  