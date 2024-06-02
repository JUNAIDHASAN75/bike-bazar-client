
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import bike1 from "../../../../assets/images/slider/bike1.png"
import bike2 from "../../../../assets/images/slider/bike2.png"
import bike3 from "../../../../assets/images/slider/bike3.png"
import bike4 from "../../../../assets/images/slider/bike4.png"

const Banner = () => {
    return (
        <div className='bg-[#ffe2db] rounded-xl'>
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }} className="mySwiper">
                <SwiperSlide>
                    <div className='lg:flex gap-3 items-center text- px-16 py-16'>
                        <div className='w-full  space-y-6'><h2 className='font-bold text-5xl text-black'>Ride-on R15 V4 <br />
                            with Smile</h2>
                            <p className='text-black'>Amet minim mollit non deserunt ullamco
                                est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <button className='bg-[#E76F51] text-white px-12 py-4 font-semibold rounded-md hover:bg-[#181818]'>Purchase</button>
                        </div>
                        <div className='w-full'><img className='image-full' src={bike1} alt="" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:flex items-center gap-3 text- px-16 py-16'>
                        <div className='w-full  space-y-6'><h2 className='font-bold text-5xl text-black'>Ride-on R15 V4 <br />
                            with Smile</h2>
                            <p className='text-black'>Amet minim mollit non deserunt ullamco
                                est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <button className='bg-[#E76F51] text-white px-12 py-4 font-semibold rounded-md hover:bg-[#181818]'>Purchase</button>
                        </div>
                        <div className='w-full'><img className='image-full' src={bike2} alt="" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:flex items-center gap-3 text- px-16 py-16'>
                        <div className='w-full  space-y-6'><h2 className='font-bold text-5xl text-black'>Ride-on R15 V4 <br />
                            with Smile</h2>
                            <p className='text-black'>Amet minim mollit non deserunt ullamco
                                est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <button className='bg-[#E76F51] text-white px-12 py-4 font-semibold rounded-md hover:bg-[#181818]'>Purchase</button>
                        </div>
                        <div className='w-full'><img className='image-full' src={bike3} alt="" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:flex items-center gap-3 text- px-16 py-16'>
                        <div className='w-full  space-y-6'><h2 className='font-bold text-5xl text-black'>Ride-on R15 V4 <br />
                            with Smile</h2>
                            <p className='text-black'>Amet minim mollit non deserunt ullamco
                                est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <button className='bg-[#E76F51] text-white px-12 py-4 font-semibold rounded-md hover:bg-[#181818]'>Purchase</button>
                        </div>
                        <div className='w-full'><img className='image-full' src={bike4} alt="" /></div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;