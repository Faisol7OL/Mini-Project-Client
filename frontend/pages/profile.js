import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import withAuth from "../components/withAuth";
import Image from "next/image";
import Link from "next/link";
import profile from "../images/profile.png";

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
  // const myArray = text.split(`""`);

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
            <Image src={profile} alt="profile" width={70} height={70} />

            <div>
              <b>Your Token :</b> {token.substring(0, 50)}... <br />
              {/* {JSON.stringify(user)} */}
              <h1>Your Username : <a>{(user.username)} </a></h1>
              <h1>Your Email : <a>{(user.email)} </a></h1>
              <h1>
                Your Facebook : <a href="facebook.com/{(user.username)}" className="text-blue-500 hover:text-blue-900"> facebook.com/{(user.username)} </a>
              </h1>
            </div>
            <div className="w-full mt-5">
              <Link href="/">
                <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Back to Homepage
                </button>
              </Link>
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
