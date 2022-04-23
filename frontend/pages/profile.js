import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import withAuth from "../components/withAuth";

import config from "../config/config";

const Profile1 = ({ token }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    profileUser();
  }, []);

  const profileUser = async () => {
    try {
      // console.log('token: ', token)
      const users = await axios.get(`${config.URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log('user: ', users.data)
      setUser(users.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout>
      <Head>
        <title>User profile</title>
      </Head>
      <Navbar />
      <div className="mw-full flex justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
          <div className="mb-4">
            <h1 className="text-2xl text-blue-700 font-extrabold flex sm:mb-1 md:mb-2 l:mb-2">
              User profile
            </h1>

            <div>
              <b>Your Token :</b> {token.substring(0, 50)}... <br />

              {/* {JSON.stringify(user)} */}
              <h1>
                Your Username : 
              {JSON.stringify(user.username)}
              </h1>
              <h1>
                Your Email :
              {JSON.stringify(user.email)}
              </h1>
              <h1>
                Your Facebook :
              "facebook.com/{JSON.stringify(user.username)}  
              </h1>
            </div>  
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(Profile1);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
