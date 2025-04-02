import React from 'react'

function Button() {
  return (
    <button className="w-[161px] max-lg:w-[120px] max-lg:h-[40px] h-[45px] flex items-center justify-center gap-3 rounded-lg bg-[#008000] cursor-pointer"><img src="../../images/call.svg" className="max-lg:w-4" alt="Phone Icon" /><p className="text-base max-lg:text-xs text-white font-poppins">Contact Us</p></button>
  )
}

export default Button