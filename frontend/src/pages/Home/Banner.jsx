import React from 'react';
import bannerImg from '../../assets/banner.png';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 px-4 justify-between items-center gap-12 bg-[#1A1A1A] text-white rounded-lg shadow-lg">
      {/* Image */}
      <div className="md:w-1/2 w-full flex items-center justify-center md:justify-end">
        <img
          src={bannerImg}
          alt="Banner"
          className="max-w-full h-auto rounded-md shadow-md"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-3xl font-bold mb-6 leading-tight text-yellow-400">
          New Releases This Week
        </h1>
        <p className="mb-8 text-gray-300 leading-relaxed">
          It's time to update your reading list with some of the latest and greatest
          releases in the literary world. From heart-pumping thrillers to captivating
          memoirs, this week's new releases offer something for everyone.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 transition duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Banner;
