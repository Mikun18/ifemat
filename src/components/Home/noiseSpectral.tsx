import { Link } from "react-router-dom";

const NoiseSpectral = () => {
  return (
    <div className="px-5 flex items-center flex-col md:flex-row my-[80px]">
      <div>
        <h1 className="font-bold text-3xl">Noise spectral density curve</h1>

        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsam
          amet cupiditate nostrum odit assumenda! Fugiat, eum in quas non
          praesentium repudiandae ipsam modi veniam voluptatem, corrupti odio
          facere exercitationem.
        </p>

        <Link to='/graph'><button className="bg-black text-white rounded-3xl px-4 py-2">
          View More
        </button></Link>
      </div>

      <div>
        <img
          src="/Images/noiseSpectral.AVIF"
          alt="Noise spectral graph"
          className="my-5 md:my-0"
        />
      </div>
    </div>
  );
};

export default NoiseSpectral;
