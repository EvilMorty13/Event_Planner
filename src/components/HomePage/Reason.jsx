import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function Reason() {
  const data = [
    {
      icon: "images/icon.png", 
      title: "Trusted marketplace from Matrimony.com group",
    },
    {
      icon: "images/icon.png", 
      title: "2.8 Lakh+ trusted vendors across 40+ cities",
    },
    {
      icon: "images/icon.png", 
      title: "2.3 million connections with 60K+ vendors",
    },
    {
      icon: "images/icon.png", 
      title: "20 Lakh+ and counting happy customers",
    },
    {
        icon: "images/icon.png", 
        title: "30 Lakh+ and counting happy customers",
    },
    {
        icon: "images/icon.png", 
        title: "40 Lakh+ and counting happy customers",
    },
    {
        icon: "images/icon.png", 
        title: "50 Lakh+ and counting happy customers",
    },
    {
        icon: "images/icon.png", 
        title: "60 Lakh+ and counting happy customers",
    },
    {
        icon: "images/icon.png", 
        title: "70 Lakh+ and counting happy customers",
    },
    {
        icon: "images/icon.png", 
        title: "80 Lakh+ and counting happy customers",
    }
  ];

  return (
    <div className="p-20 flex flex-col gap-7">
      <h1 className="text-4xl font-bold">Why WeddingBazaar</h1>
      <div className='flex flex-row gap-4'>
      <i className="my-swiper-button-prev"><KeyboardArrowLeftIcon/></i>

        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          navigation={{
            nextEl: '.my-swiper-button-next',
            prevEl: '.my-swiper-button-prev',
          }} 
          modules={[Navigation]}  // Pass the Navigation module
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center p-4 bg-white shadow-lg 
                rounded-lg border-2 border-black w-64 h-48 gap-5">
                <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
                <p className="text-lg text-center">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <i className="my-swiper-button-next"><KeyboardArrowRightIcon/></i>
      </div>
    </div>
  );
}
