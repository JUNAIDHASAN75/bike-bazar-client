import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col px-4 py-3">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className=" p-4 w-80 min-h-full bg-[#E76F51]  space-y-4 text-xl text-white">
                        {/* Sidebar content here */}
                        <li><Link to="/dashboard/reviews_add">Add Reviews</Link></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;