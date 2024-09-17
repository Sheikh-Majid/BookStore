import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl">Welcome to BookStore</h3>
          <div className=" mt-3">
            <form className=" space-y-3">
              <div>
                <label className="text-lg  font-medium">Name</label>
                <br />
                <input
                  type="text"
                  placeholder=" Enter Your Name..."
                  className="w-full input input-bordered  max-w-xs"
                  required
                />
              </div>
              <div>
                <label className="text-lg  font-medium">Email</label>
                <br />
                <input
                  type="text"
                  placeholder=" Enter Your email..."
                  className="w-full input input-bordered  max-w-xs"
                  required
                />
              </div>
              <div>
                <label className="text-lg  font-medium">Password</label>
                <br />
                <input
                  type="password"
                  placeholder=" Enter Your Password..."
                  className="w-full input input-bordered  max-w-xs"
                  required
                />
              </div>

              <div className=" flex justify-between ">
                <button className=" text-lg px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white ">
                  SignUp
                </button>

                <p className=" text-lg text-center py-2">
                  Already Register ?
                  <Link
                    to="/login"
                    className=" hover:text-blue-500 hover:underline text-blue-600 "
                  >
                    Login
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

export default SignUp
