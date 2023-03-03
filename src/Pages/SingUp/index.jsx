import React, { useState } from "react";
import "./styleUser.scss";
import 'react-toastify/dist/ReactToastify.css';

import connection from "../../Api/connection";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await connection.post("/auth", {
        firstname,
        lastname,
        email,
        phone,
        birthdate,
        password,
        confirmPassword,
      });
      console.log(response);
      toast.success("registered user!!")
      navigate('/sign_in')
    } catch (error) {
      console.log(error)
      navigate('/');
    }
  };

  return (
    <div className="container">
      <div className="min-h-screen bg-stone-900 py-6 flex flex-col justify-center sm:py-12  w-screen h-screen ">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto h-screen w-screen">
          <div className="relative px-4 py-10 bg-slate-100 mx-8 md:mx-0 shadow rounded-xl sm:p-10 bg-slate  ">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5 px-4 py-2 border:none focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm rounded-md focus:outline-none ">
                <div className="text-center block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed font-bold text-black text-4xl text-center ">
                    Sing Up
                  </h2>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col">
                        <label className="leading-loose font-bold text-black ">
                          First Name
                        </label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-900 rounded-md focus:outline-none text-gray-600"
                            placeholder="Name"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose font-bold text-black">
                          Last Name
                        </label>
                        <div class="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            class="pr-4 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-900 rounded-md focus:outline-none text-gray-600"
                            placeholder="Last Name"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="leading-loose font-bold text-black">
                        Email
                      </label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-900 rounded-md focus:outline-none text-gray-600"
                        placeholder="user@user.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="leading-loose font-bold text-black">
                        Phone
                      </label>
                      <input
                        type="number"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-900 rounded-md focus:outline-none text-gray-600"
                        placeholder="(00)9999-9999"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose font-bold text-black">
                        Birthdate
                      </label>
                      <input
                        type="date"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-900 rounded-md focus:outline-none text-gray-600"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose font-bold text-black ">
                        Password
                      </label>
                      <input
                        type="password"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-900 rounded-md focus:outline-none text-gray-600"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose font-bold text-black ">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-900 rounded-md focus:outline-none text-gray-600"
                      placeholder="********"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="pt-4 flex items-center space-x-4"  href="/signin">
                    <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                      <svg
                        className="w-6 h-6 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>{" "}
                      Cancel
                    </button>
                    <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
