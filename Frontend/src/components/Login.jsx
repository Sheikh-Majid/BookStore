import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoding] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      // console.log(name, email, password);
      try {
        setLoding(true);
        const response = await axios.post(
          "http://localhost:4001/api/v1/user/login",
          {
            
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (response.data.success) {
               toast.success(response.data.message);  
           
            document.getElementById("my_modal_3").close();
            window.location.reload();
            //  navigate("/");
            localStorage.setItem("Users", JSON.stringify(response.data.user));
            localStorage.setItem("token" , response.data.token )
         
          setEmail("");
          setPassword("");
        }
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        setLoding(false);
      }
    };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl">Welcome Back to BookStore</h3>
          <div className=" mt-3">
            <form className=" space-y-3" onSubmit={handleSubmit}>
              <div>
                <label className="text-lg  font-medium">Email</label>
                <br />
                <input
                  type="text"
                  placeholder=" Enter Your email..."
                                  className="w-full input input-bordered  max-w-xs"
                                  value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="text-lg  font-medium">Password</label>
                <br />
                <input
                  type="password"
                  placeholder=" Enter Your Password..."
                                  className="w-full input input-bordered  max-w-xs"
                                  value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className=" flex justify-between ">
                <button type='submit' className=" text-lg px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white ">
                  Login
                </button>

                <p className=" text-lg text-center py-2">
                  Not Register ?
                  <Link
                    to="/signup"
                    className=" hover:text-blue-500 hover:underline text-blue-600 "
                  >
                    signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login
