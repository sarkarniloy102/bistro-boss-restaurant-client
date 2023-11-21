import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
const Category = () => {
    return (
        <div className='my-10'>
            <div className='text-center space-y-5 mb-5'>
            <p className='text-xl text-[#D99904] '>---From 11:00am to 10:00pm---</p>
            <hr className='h-[4px] w-[424px] mx-auto'/>
            <h3 className='text-3xl'>ORDER ONLINE</h3>
            </div>
          
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} />
                    <h3 className="text-2xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} />
                    <h3 className="text-2xl uppercase text-center -mt-16 text-white">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} />
                    <h3 className="text-2xl uppercase text-center -mt-16 text-white">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} />
                    <h3 className="text-2xl uppercase text-center -mt-16 text-white">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} />
                    <h3 className="text-2xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;