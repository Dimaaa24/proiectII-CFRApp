import { NavLink } from "react-router-dom";


const UserPage = () => {
  
  return (
    <>
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-4">
            <img src="/logo.jpg" alt="Logo" className="h-10" />
            <div className="text-lg font-bold">CFR Travellers</div>
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-center w-full uppercase">
              {localStorage.getItem("username")}
            </label>
            <NavLink
              to="/login"
              className="bg-orange-500 px-4 py-2 rounded text-white"
            >
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
