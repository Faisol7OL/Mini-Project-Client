import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import axios from "axios";
import config from "../config/config";

export default function Register({ token }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const profileUser = async () => {
    console.log("token: ", token);
    const users = await axios.get(`${config.URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("user: ", users.data);
  };

  const register = async (req, res) => {
    try {
      let result = await axios.post(`${config.URL}/register`, {
        username,
        email,
        password,
      });
      console.log("result: ", result);
      console.log("result.data:  ", result.data);
      console.log("token:  ", token);
      setStatus(result.data.message);
    } catch (e) {
      console.log(e);
    }
  };

  const registerForm = () => (
    <div className="">
      <div className="">
        <h1 className="cursor-default">Username:</h1>
      </div>
      <div>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          className="form-control cursor-default shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="cursor-default">Email:</div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control cursor-default shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="cursor-default">Password:</div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control cursor-default shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <div className="cursor-default">
        <Navbar />
        <div className="mw-full flex justify-center">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
            <div className="cursor-default mb-4">
              <h1 className="text-2xl text-blue-700 font-extrabold flex sm:mb-1 md:mb-2 l:mb-2">
                Register
              </h1>
            </div>
            Status: {status}
            {registerForm()}
            <div className="flex justify-center mt-3 w-full">
              <button
                onClick={register}
                className="bg-blue-500 w-full hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
            <div>
              <b>Token:</b> {token.substring(0, 15)}...
              <button
                onClick={() => {
                  navigator.clipboard.writeText(token);
                }}
                className="border-2 rounded-lg bg-slate-200"  
              >
                Copy token
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
