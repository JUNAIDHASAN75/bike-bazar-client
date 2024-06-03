import Banner from "./Home/Banner/Banner";
import Featured from "./Home/Featured/Featured";
import LatestBike from "./Home/LatestBike/LatestBike";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <LatestBike></LatestBike>
        </div>
    );
};

export default Home;