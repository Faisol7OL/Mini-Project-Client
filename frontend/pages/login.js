import Head from "next/head";
import Layout from "../components/layout";
import { useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import config from "../config/config";

export default function Login({ token }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [ischeck, setIscheck] = useState("");

  const login = async (req, res) => {
    try {
      let result = await axios.post(
        `${config.URL}/login`,
        { username, password },
        { withCredentials: true }
      );
      console.log("result: ", result);
      console.log("result.data:  ", result.data);
      console.log("token:  ", token);
      setStatus(result.status + ": " + result.data.user.username);
    } catch (e) {
      console.log("error: ", JSON.stringify(e.response));
      setStatus(JSON.stringify(e.response).substring(0, 80) + "...");
    }
  };

  const loginForm = () => (
    <div className="">
      <div className="">
        <h1 className="">Username:</h1>
      </div>
      <div>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>Password:</div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );

  const copyText = () => {
    navigator.clipboard.writeText(token);
  };

  console.log({status});

  return (
    <Layout>
      <div className="">
        <Head>
          <title>Login</title>
        </Head>
        <Navbar />
        <div className="mw-full flex justify-center">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
            <div className="mb-4">
              <h1 className="text-2xl text-blue-700 font-extrabold flex sm:mb-1 md:mb-2 l:mb-2">
                Login
              </h1>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Token: {token.substring(0, 15)}
                <button
                  onClick={copyText}
                  className="border-2 rounded-lg bg-slate-200"
                >
                  Copy token
                </button>
              </label>

              <div>
                Status: {status}
                check: {ischeck}
              </div>
              
              {loginForm()}

              <div className="flex justify-end">
                <div className="">
                  <input
                    type="checkbox"
                    name="IsRememberMe"
                    onChange={(e) => setIscheck(e.target.value)}
                  />
                  <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                    Remember me!
                  </a>
                </div>
              </div>

              <div className="w-full">
                <button
                  onClick={login}
                  className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              </div>
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
