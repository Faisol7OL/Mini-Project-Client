import Link from 'next/link'

const Navbar = () => (
    <div className='flex justify-between w-1/5 p-2 mx-2'>
        <Link href="/"> Home </Link> 
        <Link href="/register"> Register </Link>  
        <Link href="/profile"> Profile </Link> 
        <Link href="/login"> Login </Link> 
        {/* <Link href="/students">Student</Link>  */}
        {/* <Link href="/getConfig"> Config </Link> |  */}
        {/* <Link href="/foo"> Foo </Link> | */}
        <Link href="/logout"> Logout </Link> 
    </div>
)

export default Navbar