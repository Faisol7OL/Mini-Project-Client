import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import withAuth from "../components/withAuth";
import config from "../config/config";

const foo1 = ({ token }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fooUser();
  }, []);

  const fooUser = async () => {
    try {
      // console.log('token: ', token)
      const users = await axios.get(`${config.URL}/foo`, {
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
        <title>User foo</title>
      </Head>
      <div className="">
        <Navbar />
        <h1>foo</h1>
      </div>
    </Layout>
  );
};

export default withAuth(foo1);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
