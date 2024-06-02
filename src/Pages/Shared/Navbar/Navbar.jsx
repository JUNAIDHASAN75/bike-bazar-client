import { Link } from "react-router-dom";


const Navbar = () => {
    const navItems  = <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><button className="bg-[#E76F51] text-white px-12 py-2 font-semibold rounded-sm hover:bg-[#181818]">Login</button></li>
    </>
    return (
        <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link to='/' className="font-bold text-3xl  text-black px-2"><span className="text-[#E76F51]">B</span>-Bazar</Link>
  </div>
  <div className="navbar-end hidden lg:flex items-start">
    <ul className=" 
    lg:flex items-center gap-5 px-1 text-[#181818]  text-lg my-8">
    {navItems}
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;