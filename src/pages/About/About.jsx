import "../../assets/css/main.css";

const Home = () => {
  return (
    <>
      <div className="bg-[url('/images/inner-banner.png')] bg-no-repeat bg-center bg-cover lg:h-screen max-lg:h-96 max-lg:px-5">
      <div className="container">
       <div className="flex flex-col items-center justify-center text-center lg:h-screen max-w-[635px] mx-auto max-lg:h-96">
        <h1 className="text-5xl text-white font-poppins font-bold">About Us</h1>
        <p className="text-base text-white font-poppins mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
       </div>
      </div>
      </div>
      <div className="py-20 max-xl:px-5 max-lg:py-10">
        <div className="container">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl max-lg:text-xl inline-block font-poppins font-bold relative">MISSION <b className="text-[#C12323]">STATEMENT</b><span className="absolute -bottom-2 right-0 left-0 h-[3px] w-[75%] bg-[#101010]
              "></span></h2><img src="/images/rocket.svg" alt="Rocket Icon" />
          </div>
          <div className="flex items-stretch max-lg:flex-col max-lg:gap-16 gap-3 mt-25">
            <div className="bg-white border-[0.5] border-black/10 rounded-xl p-7 pt-12 shadow-[0px_1px_14px_0px_rgba(0,0,0,0.06)] relative">
              <span className="px-5 py-2 text-2xl text-white absolute -top-[25px] left-7 font-bold font-poppins  rounded-lg bg-[#78A07C]">Mission</span>
              <p className="text-base leading-6 text-[#555555] ">At L.E.A.P our mission is to enhance global inclusivity and accessibility by providing expert autism consultation services, developing specialized program curricula for universities and companies worldwide, and delivering high-quality English language instruction for students and adults. We are committed to fostering understanding, independence, and lifelong learning through innovative, evidence-based strategies. By partnering with educational institutions, businesses, and communities, we strive to create inclusive environments that empower individuals with autism to reach their full potential while bridging language barriers for a more connected world.</p>
            </div>
            <div className="bg-white border-[0.5] border-black/10 rounded-xl p-7 pt-12 shadow-[0px_1px_14px_0px_rgba(0,0,0,0.06)] relative">
              <span className="px-5 py-2 text-2xl text-white absolute -top-[25px] left-7 font-bold font-poppins  rounded-lg bg-[#78A07C]">Vision</span>
              <p className="text-base leading-6 text-[#555555] ">Our vision is to create a world where adults with disabilities have equitable access to skill development, meaningful career opportunities, and workplace inclusion. We strive to break down barriers by providing innovative training programs, professional development resources, and employer partnerships that empower individuals to thrive in their chosen fields. Through advocacy, education, and collaboration with businesses and communities, we aim to build an inclusive workforce where diverse talents are valued, supported, and celebrated.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 max-xl:px-5">
        <div className="container">
          <h2 className="text-3xl inline-block font-poppins font-bold relative">Team <b className="text-[#C12323]">members.</b><span className="absolute -bottom-2 right-0 left-0 h-[3px] w-[75%] bg-[#101010]"></span></h2>
          <div className="grid grid-cols-12 mt-24 max-lg:space-y-12">
            <div className="col-span-3 max-lg:col-span-6 relative text-center">
             <div className="relative">
              <img src="/images/team-member-1.png" className="mx-auto" alt="Team Member Image" />
                <a href="#" className="absolute left-1/2 -translate-x-1/2 -bottom-[15px] bg-[#78A07C] w-[51px] h-[51px] rounded-[10px] flex items-center justify-center">
                <img src="/images/linkedin.svg" alt="LinkedIn Icon" className="" /></a>
              </div>
              <h6 className="text-xl leading-5 text-black font-poppins font-semibold mt-7">William Scott</h6>
              <p className="mt-1.5 text-sm text-[#414141] font-poppins font-medium">Chief Director</p>
            </div>
            <div className="col-span-3 max-lg:col-span-6 relative text-center">
             <div className="relative">
              <img src="/images/team-member-2.png" className="mx-auto" alt="Team Member Image" />
                <a href="#" className="absolute left-1/2 -translate-x-1/2 -bottom-[15px] bg-[#78A07C] w-[51px] h-[51px] rounded-[10px] flex items-center justify-center">
                <img src="/images/linkedin.svg" alt="LinkedIn Icon" className="" /></a>
              </div>
              <h6 className="text-xl leading-5 text-black font-poppins font-semibold mt-7">Alison Brown </h6>
              <p className="mt-1.5 text-sm text-[#414141] font-poppins font-medium">Chief Director</p>
            </div>
            <div className="col-span-3 max-lg:col-span-6 relative text-center">
             <div className="relative">
              <img src="/images/team-member-3.png" className="mx-auto" alt="Team Member Image" />
                <a href="#" className="absolute left-1/2 -translate-x-1/2 -bottom-[15px] bg-[#78A07C] w-[51px] h-[51px] rounded-[10px] flex items-center justify-center">
                <img src="/images/linkedin.svg" alt="LinkedIn Icon" className="" /></a>
              </div>
              <h6 className="text-xl leading-5 text-black font-poppins font-semibold mt-7">Adam Henry</h6>
              <p className="mt-1.5 text-sm text-[#414141] font-poppins font-medium">Chief Director</p>
            </div>
            <div className="col-span-3 max-lg:col-span-6 relative text-center">
             <div className="relative">
              <img src="/images/team-member-4.png" className="mx-auto" alt="Team Member Image" />
                <a href="#" className="absolute left-1/2 -translate-x-1/2 -bottom-[15px] bg-[#78A07C] w-[51px] h-[51px] rounded-[10px] flex items-center justify-center">
                <img src="/images/linkedin.svg" alt="LinkedIn Icon" className="" /></a>
              </div>
              <h6 className="text-xl leading-5 text-black font-poppins font-semibold mt-7">Sally Watson</h6>
              <p className="mt-1.5 text-sm text-[#414141] font-poppins font-medium">Chief Director</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;