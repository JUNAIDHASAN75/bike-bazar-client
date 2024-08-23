import { useEffect, useState } from "react";
import HeaderTitle from "../../../../Component/HeaderTitle";

const StarRating = ({ rating }) => {
    const totalStars = 5;
    return (
      <div className="star-rating text-2xl">
        {Array.from({ length: totalStars }, (v, i) => (
          <span key={i} className={i < rating ? 'text-orange-500' : 'text-orange-200'}>
            ★
          </span>
        ))}
      </div>
    );
  };
const HappyCustomer = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    console.log(reviews)

    return (
        <div>
            <HeaderTitle title={"Happy Client Says"}></HeaderTitle>
            <div className="lg:flex justify-center  gap-5 my-20">
                {
                    reviews?.map(item => <div key={item?._id} className="card w-96 bg-white border  p-4">
                        <img src={item.photoURL} alt="Shoes" className="rounded-full mx-auto w-[149px]" />

                        <div className="card-body items-center text-center">
                            <p>{item?.review}</p>
                            <StarRating rating={item?.rating} />
                            <h2 className="card-title font-semibold text-[24px] text-[#23A6F0]">{item?.name}</h2>
                            <h2 className="card-title text-[16px] text-black">{item?.designation}</h2>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default HappyCustomer;