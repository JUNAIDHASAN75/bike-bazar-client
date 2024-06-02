import HeaderTitle from "../../../../Component/HeaderTitle";
import bike1 from "../../../../assets/images/others/feature-bike.png"

const Featured = () => {
    return (
        <div className="mt-[169px]">
            <HeaderTitle title={"Featured Bikes In This Year"} subTitle={"Best bike collection"}></HeaderTitle>
            <div className="lg:flex justify-center my-[50px]">
                <div className="w-full"> <img className="mx-auto" src={bike1} alt="" /></div>
                <div className="w-full"> <img className="mx-auto" src={bike1} alt="" /></div>
                <div className="w-full"> <img className="mx-auto" src={bike1} alt="" /></div>
            </div>
        </div>
    );
};

export default Featured;