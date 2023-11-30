import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link, useLoaderData } from 'react-router-dom';

const ContestCreator = () => {
  const creatorData = useLoaderData();

  return (
    <div>
      <h1 className='text-center font-bold text-3xl mb-6'>Best Contest Creator </h1>
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
        {creatorData?.map((data) => (
          <SwiperSlide key={data._id}>
            <img src={data.image} style={{ width: '100%', height: '200px' }} alt={data.contestName} />
            <p>
              <span className='font-bold'>Contest Creator:</span> {data.contestCreator}
            </p>
            <p className='mt-12'>
              <span className='font-bold'>Contest Name:</span> {data.contestName}
            </p>
            <p>
              <span className='font-bold'>Description:</span> {data.description}
            </p>
          
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContestCreator;
