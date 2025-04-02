import "../../../src/assets/css/main.css";

const Footer = () => {
  return (
    <footer className="pt-20 bg-[#F4F4F4] border border-[#00000033]/20 max-lg:px-5">
     <div className="container">
      <div className="grid grid-cols-12 max-md:gap-5 items-start">
        <div className="col-span-6 max-md:col-span-12 max-w-[80%]">
          <img src="/images/logo.svg" className="w-20" alt="LEAP Logo" />
          <p className="mt-5 text-sm text-black leading-6 font-poppins">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  sed do eiusmod. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  sed do eiusmod.</p>
        </div>
        <div className="col-span-3 max-md:col-span-12">
          <h5 className="text-xl leading-8 text-black font-poppins mb-10 font-medium">Quick Links</h5>
          <ul className="flex flex-col gap-4">
            <li><a href="/" className="text-base leading-6 text-black font-poppins">Home</a></li>
            <li><a href="/" className="text-base leading-6 text-black font-poppins">About us</a></li>
            <li><a href="/" className="text-base leading-6 text-black font-poppins">Success Story</a></li>
            <li><a href="/" className="text-base leading-6 text-black font-poppins">Contact us</a></li>
          </ul>
        </div>
        <div className="col-span-3 max-md:col-span-12">
          <h5 className="text-xl leading-8 text-black font-poppins mb-10 font-medium">Contact Us</h5>
          <ul className="flex flex-col gap-4">
            <li><a href="/" className="flex items-start gap-2"><img src="/images/footer-icon1.svg" className="mt-1" alt="Footer Icon" /><p className="text-base leading-6 text-black font-poppins">Home</p></a></li>
            <li><a href="/" className="flex items-start gap-2"><img src="/images/footer-icon2.svg" className="mt-1" alt="Footer Icon" /><p className="text-base leading-6 text-black font-poppins">00  laorem ipsum laorem ipsum laorem ipsum.</p></a></li>
            <li><a href="/" className="flex items-start gap-2"><img src="/images/footer-icon3.svg" className="mt-1" alt="Footer Icon" /><p className="text-base leading-6 text-black font-poppins">+91 8585859685</p></a></li>
            <li><a href="/" className="flex items-start gap-2"><img src="/images/footer-icon3.svg" className="mt-1" alt="Footer Icon" /><p className="text-base leading-6 text-black font-poppins">+91 8596859685</p></a></li>
          </ul>
        </div>
      </div>
      <hr className="border-[#00000033] mt-20 max-lg:mt-5" />
      <small className="text-xs text-black leading-4 p-6 text-center block font-poppins font-medium">Ⓒ 2025 All rights reserved. LEAP</small>
     </div>
    </footer>
  );
};

export default Footer;