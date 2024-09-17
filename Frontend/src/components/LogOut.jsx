import React from 'react'
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const [authUser, setAuthUser] = useAuth();
    const navigate = useNavigate();
   
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
         window.location.reload();
      localStorage.removeItem("Users");
      toast.success("Logout successfully");
     
         

    
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
          <button className=" bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-500 duration-300 cursor-pointer"
          onClick={handleLogout}>
              Logout
      </button>
    </div>
  );
}

export default LogOut
