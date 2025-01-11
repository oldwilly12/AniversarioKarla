import React from 'react'
import { FaHeart } from "react-icons/fa6";

export default function Video() {
  return (
    <div className="flex flex-col items-center w-full aspect-video space-y-4">
      <div className="text-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-bold py-4 text-2xl lg:text-5xl">
          Te amo !! Espero y te guste
        </h1>
        <div className="flex justify-center mt-2">
          <FaHeart className="text-red-600 text-3xl lg:text-5xl" />
        </div>
      </div>
      <div className="flex justify-center items-center w-full max-w-4xl m">
        <div className=' flex justify-center items-center '>
          <video className="w-9/12 h-5/6 rounded-lg py-2 px-2 " controls>
            <source src="Video_Recuerdos.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}
