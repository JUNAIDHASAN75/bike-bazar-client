import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bike1 from "../../../../assets/images/slider/bike1.png";
import bike2 from "../../../../assets/images/slider/bike2.png";
import bike3 from "../../../../assets/images/slider/bike3.png";
import bike4 from "../../../../assets/images/slider/bike4.png";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

// Custom Left Arrow Component
const CustomLeftArrow = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            className="absolute left-2 text-5xl p-2 rounded-full text-slate-500 hover:text-slate-900 transition-all"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
        >

            <MdOutlineKeyboardArrowLeft />
        </div>
    );
};

// Custom Right Arrow Component
const CustomRightArrow = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            className="absolute right-2 text-5xl p-2 rounded-full text-slate-500 hover:text-slate-900 transition-all"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
        >

            <MdKeyboardArrowRight />
        </div>
    );
};

const Banner = () => {
    return (
        <div className='bg-[#ffe2db] md:rounded-xl relative'>
            <Carousel
              swipeable={true}
                responsive={responsive}
                autoPlay={true}
                showDots={true}
                infinite={true}
                autoPlaySpeed={3000}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                customTransition="all 0.5"
                transitionDuration={500}
            >
                {/* First Slide */}
                <div>
                    <div className='lg:flex  gap-3 items-center px-16 py-16'>
                        <div className='w-full space-y-6'>
                            <h2 className='font-bold text-5xl text-black'>Ride-on R15 V4 <br /> with Smile</h2>
                            <p className='text-black'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            </p>
                            <button className='bg-[#E76F51] text-white px-12 py-4 font-semibold rounded-sm hover:bg-[#181818]'>Purchase</button>
                        </div>
                        <div className='w-full'>
                            <img className='image-full' src={bike1} alt="Bike 1" />
                        </div>
                    </div>
                </div>
                {/* Second Slide */}
                <div>
                    <div className='lg:flex gap-3 items-center px-16 py-16'>
                        <div className='w-full space-y-6'>
                            <h2 className='font-bold text-5xl text-black'>Ride-on R15 V4 <br /> with Smile</h2>
                            <p className='text-black'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            </p>
                            <button className='bg-[#E76F51] text-white px-12 py-4 font-semibold rounded-sm hover:bg-[#181818]'>Purchase</button>
                        </div>
                        <div className='w-full'>
                            <img className='image-full' src={bike2} alt="Bike 2" />
                        </div>
                    </div>
                </div>
                {/* Third Slide */}
                <div>
                    <div className='lg:flex gap-3 items-center px-16 py-16'>
                        <div className='w-full space-y-6'>
                            <h2 className='font-bold text-5xl text-black'>Ride-on R15 V4 <br /> with Smile</h2>
                            <p className='text-black'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            </p>
                            <button className='bg-[#E76F51] text-white px-12 py-4 font-semibold rounded-sm hover:bg-[#181818]'>Purchase</button>
                        </div>
                        <div className='w-full'>
                            <img className='image-full' src={bike3} alt="Bike 3" />
                        </div>
                    </div>
                </div>
                {/* Fourth Slide */}
                <div>
                    <div className='lg:flex gap-3 items-center px-16 py-16'>
                        <div className='w-full space-y-6'>
                            <h2 className='font-bold text-5xl text-black'>Ride-on R15 V4 <br /> with Smile</h2>
                            <p className='text-black'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            </p>
                            <button className='bg-[#E76F51] text-white px-12 py-4 font-semibold rounded-sm hover:bg-[#181818]'>Purchase</button>
                        </div>
                        <div className='w-full'>
                            <img className='image-full' src={bike4} alt="Bike 4" />
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
