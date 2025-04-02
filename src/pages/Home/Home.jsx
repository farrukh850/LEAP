import { Link } from "react-router-dom"
import Button from "../../components/common/Button"
import Testimonials from "../../components/common/Testimonials"

const Home = () => {
  return (
    <>
      <div className="relative xl:h-screen">
        <div className="container max-xl:px-5">
          <div className="flex flex-col max-md:flex-col gap-7 lg:w-[50%] max-lg:pt-32 lg:h-screen justify-center">
            <h1 className="text-6xl max-lg:text-4xl text-black font-bold font-poppins">Potential has no <b className="text-[#C12323]">Boarders</b></h1>
            <p className="font-poppins font-medium text-base text-[#414141]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <Button />
          </div>
        </div>
        <div className="lg:absolute max-lg:relative lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2 lg:h-screen h-80 max-lg:mt-5 max-lg:px-5">
          <img src="../../images/convocation.png" className="w-full h-full object-cover" alt="Convocation Image" />
        </div>
      </div>
      <div className="container py-28 max-xl:px-5 max-sm:pb-10">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl max-lg:text-xl uppercase font-poppins font-bold relative">Our <b className="text-[#C12323]">Services</b><span className="absolute -bottom-2 right-0 left-0 h-[3px] bg-[#101010]
          "></span></h2>
            <Button />
        </div>
        <div className="grid grid-cols-12 mt-40 gap-5 max-xl:space-y-16 items-stretch">
          <div className="col-span-3 max-md:col-span-12 max-xl:col-span-6 p-6 border border-[#0000001A]/10 bg-white pt-16 shadow-[0px_1px_14px_0px_rgba(0,0,0,0.1)] rounded-xl relative">
            <div className="w-25 h-25 rounded-xl bg-[#78A07C] flex items-center justify-center mx-auto absolute -top-[20%] left-1/2 -translate-x-1/2">
              <img src="/images/service-icon1.svg" alt="Service Icon" />
            </div>
            <h3 className="text-xl font-semibold font-poppins text-[#78A07C] my-4 text-center">Corporate & University Consulting</h3>
            <p className="text-sm text-[#555555] font-poppins text-center">Helping organizations develop neurodiversity-friendly policies, training programs, and support systems.</p>
          </div>
          <div className="col-span-3 max-md:col-span-12 max-xl:col-span-6 p-6 border border-[#0000001A]/10 bg-white pt-16 shadow-[0px_1px_14px_0px_rgba(0,0,0,0.1)] rounded-xl relative">
            <div className="w-25 h-25 rounded-xl bg-[#78A07C] flex items-center justify-center mx-auto absolute -top-[20%] left-1/2 -translate-x-1/2">
              <img src="/images/service-icon2.svg" alt="Service Icon" />
            </div>
            <h3 className="text-xl font-semibold font-poppins text-[#78A07C] my-4 text-center">Program Curriculum Development</h3>
            <p className="text-sm text-[#555555] font-poppins text-center">Designing evidence-based curricula that promote accessibility and success for neurodivergent individuals.</p>
          </div>
          <div className="col-span-3 max-md:col-span-12 max-xl:col-span-6 p-6 border border-[#0000001A]/10 bg-white pt-16 shadow-[0px_1px_14px_0px_rgba(0,0,0,0.1)] rounded-xl relative">
            <div className="w-25 h-25 rounded-xl bg-[#78A07C] flex items-center justify-center mx-auto absolute -top-[20%] left-1/2 -translate-x-1/2">
              <img src="/images/service-icon3.svg" alt="Service Icon" />
            </div>
            <h3 className="text-xl font-semibold font-poppins text-[#78A07C] my-4 text-center">Workplace Inclusion 
            Strategies</h3>
            <p className="text-sm text-[#555555] font-poppins text-center">Assisting companies in creating inclusive hiring, onboarding, and workplace support practices.</p>
          </div>
          <div className="col-span-3 max-md:col-span-12 max-xl:col-span-6 p-6 border border-[#0000001A]/10 bg-white pt-16 shadow-[0px_1px_14px_0px_rgba(0,0,0,0.1)] rounded-xl relative">
            <div className="w-25 h-25 rounded-xl bg-[#78A07C] flex items-center justify-center mx-auto absolute -top-[20%] left-1/2 -translate-x-1/2">
              <img src="/images/service-icon4.svg" alt="Service Icon" />
            </div>
            <h3 className="text-xl font-semibold font-poppins text-[#78A07C] my-4 text-center">Educational Training & Workshops</h3>
            <p className="text-sm text-[#555555] font-poppins text-center">Equipping educators, staff, and leadership with the tools to support neurodiverse students and employees effectively.</p>
          </div>
        </div>
      </div>
      <div className="container pb-28 max-xl:px-5 max-sm:pb-10">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl max-lg:text-xl uppercase font-poppins font-bold relative">Countries <b className="text-[#C12323]">where we have worked</b><span className="absolute -bottom-2 right-0 left-0 h-[3px] bg-[#101010]
            "></span></h2>
          </div>
          <img src="/images/map.svg" className="mt-24" alt="Map" />
      </div>
      <div className="py-22 bg-[#78A07C] max-sm:py-10">
        <div className="container max-xl:px-5">
          <h3 className="text-4xl text-white font-semibold mb-4 text-center">Our Partners</h3>
          <div className="grid grid-cols-7 max-md:gap-3 items-center max-lg:justify-center justify-around py-6">
            <div className="col-span-1 mx-auto">
              <img src="/images/partner-logo1.svg" alt="Partner Logo" />
            </div>
            <div className="col-span-1 mx-auto">
              <img src="/images/partner-logo2.svg" alt="Partner Logo" />
            </div>
            <div className="col-span-1 mx-auto">
              <img src="/images/partner-logo3.svg" alt="Partner Logo" />
            </div>
            <div className="col-span-1 mx-auto">
              <img src="/images/partner-logo4.svg" alt="Partner Logo" />
            </div>
            <div className="col-span-1 mx-auto">
              <img src="/images/partner-logo5.svg" alt="Partner Logo" />
            </div>
            <div className="col-span-1 mx-auto">
              <img src="/images/partner-logo6.svg" alt="Partner Logo" />
            </div>
            <div className="col-span-1 mx-auto">
              <img src="/images/partner-logo7.svg" alt="Partner Logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-25 bg-[#F8F8F8] max-xl:px-5 max-sm:pb-10">
        <div className="container flex max-md:flex-col items-center gap-12">
          <div className="flex flex-col flex-1 gap-9 items-start">
            <h2 className="text-3xl inline-block font-poppins font-bold relative">Success <b className="text-[#C12323]">Stories</b><span className="absolute -bottom-2 right-0 left-0 h-[3px] w-[75%] bg-[#101010]
            "></span></h2>
            <p className="text-lg leading-7 text-[#97918B] font-poppins">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
            <Link href="#" className="py-2.5 px-9 bg-[#78A07C] text-base font-medium text-white font-poppins rounded-lg">Explore Our Stories</Link>
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <div className="w-full h-[181px] rounded-3xl overflow-hidden">
              <img src="/images/SS-img1.png" className="w-full h-full object-cover" alt="Suuccess Stories Image" />
            </div>
            <div className="flex gap-5">
              <div className="w-full h-[281px] rounded-3xl overflow-hidden">
                <img src="/images/SS-img2.png" className="w-full h-full object-cover" alt="Suuccess Stories Image" />
              </div>
              <div className="w-full h-[281px] rounded-3xl overflow-hidden">
                <img src="/images/SS-img3.png" className="w-full h-full object-cover" alt="Suuccess Stories Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default Home;