import Navbar from '../Components/Navbar';

const bannerGif = '/images/optimized-banner.gif';
const logoText = '/images/logo2024 1.png';
const imageAndPattern = '../../public/images/pilt ja muster.png';
const ekssl = '../../public/images/ekksl logo.png';
const vocoLogo = '../../public/images/voco logo.png';

const Home = () => {
  return (
    <>
      <img src={bannerGif} alt="" className="w-full" />
      <div className="h-[1000px] w-full bg-black relative flex items-end">
        <Navbar />
        <div className="w-[500px] h-[500px] bottom-0 right-0 absolute triangle-container flex justify-between items-center">
          <h1 className="text-[40px] text-center text-white z-10 self-start justify-self-start -ml-36 -mt-12">
            XXIX Baltic Games for Vocational Schools
          </h1>
          <img src={logoText} alt="" className="mr-6 z-10" />
        </div>
        <div>
          <img
            src={imageAndPattern}
            alt=""
            className="xl:w-[700px] w-[600px]"
          />
          <span className="flex mb-6">
            <img src={ekssl} alt="" />
            <img src={vocoLogo} alt="" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
