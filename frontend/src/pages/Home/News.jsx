import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

import news1 from "../../assets/news/news-1.png";
import news2 from "../../assets/news/news-2.png";
import news3 from "../../assets/news/news-3.png";
import news4 from "../../assets/news/news-4.png";

const news = [
  {
    id: 1,
    title: "Global Climate Summit Calls for Urgent Action",
    description: "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
    image: news1,
  },
  {
    id: 2,
    title: "Breakthrough in AI Technology Announced",
    description: "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
    image: news2,
  },
  {
    id: 3,
    title: "New Space Mission Aims to Explore Distant Galaxies",
    description: "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
    image: news3,
  },
  {
    id: 4,
    title: "Stock Markets Reach Record Highs Amid Economic Recovery",
    description: "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
    image: news4,
  },
  {
    id: 5,
    title: "Innovative New Smartphone Released by Leading Tech Company",
    description: "A leading tech company has released its latest smartphone model, featuring cutting-edge technology, improved battery life, and a sleek new design.",
    image: news2,
  },
];

const News = () => {
  return (
    <div className="py-16 px-4 bg-[#121212] text-white rounded-xl">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Latest News</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {news.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-[#1E1E1E] p-6 rounded-lg shadow-lg hover:shadow-yellow-300 transition duration-300">
              {/* Content */}
              <div className="flex-1">
                <Link to="/" className="hover:underline">
                  <h3 className="text-xl font-semibold text-white hover:text-yellow-400 mb-3">
                    {item.title}
                  </h3>
                </Link>
                <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
                <p className="text-sm text-gray-300 mb-4">{item.description}</p>

                {/* Review Buttons */}
                <div className="flex gap-3 mt-2">
                  <Link to={`/news/${item.id}/reviews`}>
                    <button className="px-4 py-1 bg-yellow-500 text-sm rounded hover:bg-yellow-600 transition">
                      Read Reviews
                    </button>
                  </Link>
                  <Link to={`/news/${item.id}/write-review`}>
                    <button className="px-4 py-1 bg-transparent border border-yellow-500 text-sm text-yellow-400 rounded hover:bg-yellow-600 hover:text-white transition">
                      Write Review
                    </button>
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="w-full sm:w-40 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md w-full h-auto object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
