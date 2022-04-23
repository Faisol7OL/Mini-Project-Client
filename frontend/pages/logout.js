import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import config from "../config/config";

export default function Logout({ token }) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    logout();
  }, []);

  const logout = async () => {
    console.log("remove token: ", token);
    let result = await axios.get(`${config.URL}/logout`, {
      withCredentials: true,
    });
    setStatus("Logout successful");
  };  

  return (
    <div>
      <Head>
        <title>User profile</title>
      </Head>
      <Navbar />
      <div className="mw-full flex justify-center">
        {/* <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2"> */}
          <div className="mb-4">
            <h1 className="text-2xl text-red-500 font-extrabold flex sm:mb-1 md:mb-2 l:mb-2">
            {status}
            </h1>
          </div>
          <div>
        </div>
        {/* </form> */}

        
      </div>
    </div>
  );
}
