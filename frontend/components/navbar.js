import Link from "next/link";

const Navbar = () => (
  <div className="w-full bg-slate-200 ">
    <div className="flex justify-between bg-slate-200 py-2  ">
      <div className="flex mx-2">
        <div className="hover:text-red-600 mx-1 my-0.5 font-mono text-lg">
          <Link href="/"> Home </Link> 
        </div>
        <a>|</a>       
        <div className="hover:text-red-600 mx-1 my-0.5 font-mono text-lg">
          <Link href="/profile"> Profile </Link>{" "}
        </div>
      </div>
      <div className="flex justify-end mr-4">
        <div className="hover:text-red-600 mx-1 my-0.5 font-mono text-lg">
          <Link href="/register"> Register </Link>{" "} 
        </div>
        <a>|</a>    
        <div className="hover:text-red-600 mx-1 my-0.5 font-mono text-lg">
          <Link href="/login"> Login </Link>{" "} 
        </div>
        <a>|</a>    
        <div className="hover:text-red-600 mx-1 my-0.5 font-mono text-lg flex justify-end">
          <Link href="/logout"> Logout </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
