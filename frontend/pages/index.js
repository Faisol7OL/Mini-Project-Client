import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
// import styles from "../styles/Home.module.css";
import cssImage from "../images/cssImage.png";
import htmlImage from "../images/htmlImage.png";
import nextImage from "../images/nextImage.png";
import nodeImage from "../images/nodeImage.png";
import profile from "../images/profile.png";
import tailwindImage from "../images/tailwindImage.png";
import Image from "next/image";

export default function Home({ token }) {
  const myLoader = ({ src, width, quality }) => {
    return `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png`;
  };

  return (
    <Layout>
      <Head>
        {" "}
        git remote add origin
        https://github.com/Faisol7OL/Mini-Project-Client.git
        <title>First Page</title>
      </Head>
      <div className="w-full ">
        <div className="">
          <Navbar />
          <h1 className="text-4xl text-blue-700 font-extrabold flex sm:mb-1 md:mb-2 l:mb-2 ml-5">
            Home page
          </h1>
        </div>
        <div className=" flex justify-center mt-20 ">
          <div className="w-1/3">
            <h1>
              &emsp;&emsp;&emsp;&emsp;ผู้จัดทำได้จัดทำหัวข้อนี้เพราะ "
              เป็นการจัดทำและนำเสนอ Mini Project ของรายวิชานี้ "
              และด้วยความที่ได้เรียนรู้หัวข้อนี้ทางผู้จัดทำจึงได้นำมาจัดทำ
              <br />
              &emsp;&emsp;&emsp;&emsp;เว็บไซด์นี้จัดทำขึ้นมีจุดประสงค์ในการจัดทำ
              เพื่อศึกษาเกี่ยวกับการแสดงข้อมูลเบื้องต้นของผู้ใช้
              ซึ่งจะนำข้อมูลจากการสมัครสมาชิคมาแสดงผล
              ซึ่งทางผู้จัดทำได้นำมาเป็นหัวข้อในการศึกษาเพื่อประกอบกับเนื้อหาที่ได้เรียนในรายวิชา
              240-311 ซึ่งถูกพัฒนาด้วย Next.Js และ Node.JS โดยทำการตกแต่งด้วย
              CSS Framework ที่ชื่อว่า TailwindCSS
            </h1>
            <br/> 
            <div className="flex justify-between  ">
            <Image src={nextImage} alt="next" width={50} height={50} />
            <Image src={cssImage} alt="Css" width={50} height={50} />
            <Image src={htmlImage} alt="html" width={50} height={50} />
            <Image src={nodeImage} alt="node" width={100} height={60} />
            <Image src={tailwindImage} alt="tailwind" width={200} height={30} />
            </div>  
          </div>  
        </div>
      </div>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token"))
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
