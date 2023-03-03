import React, { useState, useEffect } from "react";
import connection from "../../Api/connection";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await connection.post("/auth/sign_in", { email, password });
       console.log(response)
       navigate('/')
    } catch (error) {
      toast.error("Incorrect email or password!");
    }

  };

  return (
    <div className="flex items-center min-h-screen bg-zinc-900"> 
      <div class="px-8 py-6 mx-10 mt-4 text-left bg-white rounded-md shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h2 class="text-2xl font-bold text-center">Login</h2>
        <div className="form-data">
          <div class="mt-4">
            <form onSubmit={handleSubmit}> 
              <div class="mt-4">
              <label class="block" for="t-email">
                  Email
                  <input
                    type="text"
                    name="email"
                    placeholder="bryan@gmail.com"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </label>
              </div>
              <div class="mt-4">
              <label class="block" for="pws">
                  Password
                  <input
                    type="password"
                    placeholder="..."
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </label>
              </div>
              <div>
              <button class="w-full px-6 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-800">SignIn</button>
              </div>
               <div class="mt-5 text-grey-dark">
                  Already have an account?
                  <a class="px-2 text-blue-600 hover:underline" href="/signup">
                      Sign Up
                  </a>
              </div> 
            </form>
          </div>
        </div>
      </div>
      <div className="img px-2">
        <img className="h-25 w-55" src="https://files.tecnoblog.net/wp-content/uploads/2021/08/tatuagem-apps-1.jpg" alt="tattoReal"></img>
      </div>
    </div>
  );
};



export default SignIn;
