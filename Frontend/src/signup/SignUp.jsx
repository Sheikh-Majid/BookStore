import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoding] = useState(false);
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser)
  const handleSubmit = async(e) => {
      e.preventDefault();
    // console.log(name, email, password);
    try {
      setLoding(true);
      const response = await axios.post(
        "http://localhost:4001/api/v1/user/register",
        {
          name,
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
        navigate("/");
        setName("");
        setEmail("");
        setPassword("");
      }
     } catch (error) {
       toast.error(error.response.data.message)
     } finally {
      setLoding(false);
     }
   }
  return (
    <div>
      <Navbar />
      <div id="my_modal_3" className=" flex justify-center items-center mt-16 ">
        <div className="modal-box dark:bg-slate-800 dark:text-white">
          <h3 className="font-bold text-xl text-center dark:text-white">
            Welcome to BookStore
          </h3>
          <div className=" mt-10">
            <form className=" space-y-3 dark:bg-slate-800 dark:text-white" onSubmit={handleSubmit}>
              <div>
                <label className="text-lg  font-medium">Name</label>
                <br />
                <input
                  type="text"
                  placeholder=" Enter Your Name..."
                  className="w-full input input-bordered  dark:text-black "
                  required
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                />
              </div>
              <div>
                <label className="text-lg  font-medium">Email</label>
                <br />
                <input
                  type="text"
                  placeholder=" Enter Your email..."
                  className="w-full input input-bordered dark:text-black  "
                  required
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="text-lg  font-medium">Password</label>
                <br />
                <input
                  type="password"
                  placeholder=" Enter Your Password..."
                  className="w-full input input-bordered dark:text-black "
                  required
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                />
              </div>

              <div className=" flex justify-between ">
                <button className=" text-lg px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white ">
                  SignUp
                </button>

                <p className=" text-lg text-center py-2">
                  Already Register ?
                  <button
                  
                    className=" hover:text-blue-500 hover:underline text-blue-600 "
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login/>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp
