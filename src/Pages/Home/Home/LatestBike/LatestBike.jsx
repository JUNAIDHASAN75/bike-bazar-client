import { Link } from "react-router-dom";
import HeaderTitle from "../../../../Component/HeaderTitle";
import latest1 from "../../../../assets/images/others/latest1.png"
import latest2 from "../../../../assets/images/others/latest2.png"
import latest3 from "../../../../assets/images/others/latest3.png"
const LatestBike = () => {
    return (
        <div className="my-32 ">
           
            <HeaderTitle title={"latest News"}></HeaderTitle>
            <div className="mt-14 lg:flex gap-5 justify-center py-4 bg-red-50">
                <div className="card w-96 bg-white border">
                    <figure className="px-8 pt-10">
                        <img src={latest1} alt="Shoes" className="rounded-lg" />
                    </figure>
                    <div className="card-body space-y-2 text-black">
                        <h2 className="card-title font-semibold text-2xl">Ducati XDIAVEL S-73</h2>
                        <p className="text-[#6C6C6C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
                        <div className="card-actions">
                            <Link className='bg-[] border border-[#E76F51] text-[#E76F51] px-8 py-3 font-semibold rounded-md hover:text-white hover:bg-[#E76F51]'>Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-white border">
                    <figure className="px-8 pt-10">
                        <img src={latest2} alt="Shoes" className="rounded-lg" />
                    </figure>
                    <div className="card-body space-y-2 text-black">
                        <h2 className="card-title font-semibold text-2xl">Ducati XDIAVEL S-73</h2>
                        <p className="text-[#6C6C6C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
                        <div className="card-actions">
                            <Link className='bg-[] border border-[#E76F51] text-[#E76F51] px-8 py-3 font-semibold rounded-md hover:text-white hover:bg-[#E76F51]'>Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-white border">
                    <figure className="px-8 pt-10">
                        <img src={latest3} alt="Shoes" className="rounded-lg" />
                    </figure>
                    <div className="card-body space-y-2 text-black">
                        <h2 className="card-title font-semibold text-2xl">Ducati XDIAVEL S-73</h2>
                        <p className="text-[#6C6C6C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
                        <div className="card-actions">
                            <Link className='bg-[] border border-[#E76F51] text-[#E76F51] px-8 py-3 font-semibold rounded-md hover:text-white hover:bg-[#E76F51]'>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBike;