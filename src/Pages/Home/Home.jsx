import Banner from "./Home/Banner/Banner";
import Featured from "./Home/Featured/Featured";
import FrequentlyAskQues from "./Home/FrequentlyAskQues/FrequentlyAskQues";
import HappyCustomer from "./Home/HappyCustomer/HappyCustomer";
import LatestBike from "./Home/LatestBike/LatestBike";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <LatestBike></LatestBike>
            <HappyCustomer></HappyCustomer>
            <FrequentlyAskQues></FrequentlyAskQues>
        </div>
    );
};

export default Home;