import { Link } from 'react-router-dom';
import "../../assets/css/main.css";
import Testimonials from "../../components/common/Testimonials"
import stories from '../../data/stories.json';

const Home = () => {
  return (
    <>
      <div className="bg-[url('/images/inner-banner.png')] bg-no-repeat bg-center bg-cover lg:h-screen max-lg:h-96 max-lg:px-5">
      <div className="container">
       <div className="flex flex-col items-center justify-center text-center lg:h-screen max-w-[635px] mx-auto max-lg:h-96">
        <h1 className="text-5xl text-white font-poppins font-bold">Success Stories</h1>
        <p className="text-base text-white font-poppins mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
       </div>
      </div>
      </div>  
      <div className="pt-20 pb-48 bg-[#F8F8F8] max-xl:px-5 max-lg:pt-10">
        <div className="container">
          <div className="flex justify-center">
            <h2 className="text-3xl inline-block mx-auto font-poppins font-bold relative text-center">Success <b className="text-[#C12323]">Stories</b><span className="absolute -bottom-2 right-0 left-1/2 -translate-x-1/2 h-[3px] w-[60%] bg-[#101010]"></span></h2>
          </div>
          <div className="grid grid-cols-12 max-lg:space-y-28 gap-6 mt-12">
            {stories.map(story => (
              <div className="col-span-4 max-sm:col-span-12 max-lg:col-span-6 relative">
                <div className="w-full h-[286px] rounded-lg overflow-hidden">
                  <img src={story.image} alt="Success Story Image" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 bg-[#F5F7FA] shadow-[0px_8px_16px_0px_#ABBED166] rounded-lg text-center absolute top-[75%] mx-6 min-h-[168px]">
                  <h3 className="text-xl leading-7 text-[#242424] font-semibold">{story.title}</h3>
                  <Link  to={`/stories/${story.id}`} className="flex items-center gap-2 justify-center mt-6"><p className="text-xl leading-7 text-[#78A07C] font-poppins font-semibold">Readmore</p><img src="/images/arrow-right-green.svg" alt="Arrow Right Green" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default Home;