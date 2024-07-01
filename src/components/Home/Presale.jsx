import React from 'react'
import { BuyClaim } from './buyClaim'

export const Presale = () => {
  return (
    <div>
      <div className="container mx-auto px-[15px] py-[40px] lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="content">
            <h4 class="neon text-black text-[34px] font-semibold leading-1">Welcome to  <u className='text-[#229ed2] ' style={{ textDecoration: 'none' }}> Meme </u>Tokens - The Future of Real World Utility Memes on Solana!</h4>
            <div className="">
            <h5 className='text-[#242424] poppins text-[16px] font-semibold mb-[10px]'> Why just surf when you can ride the wave with Dolphin Meme Tokens, the pinnacle of meme coin evolution on Solana! </h5>
            <h5 className='text-[#242424] poppins text-[16px] font-semibold mb-[10px]'>Connect, trade, and shop with the freedom and fun only a true utility meme coin can offer. </h5>
            <h5 className='text-[#242424] poppins text-[16px] font-semibold mb-[10px]'>Dolphin isn’t just another token; it’s a community, celebrating every splash in the vast ocean of crypto. </h5>
            <h5 className='text-[#242424] poppins text-[16px] font-semibold mb-[10px]'>Dive into a sea of possibilities with Dolphin Token. Evolve your portfolio on Solana today! </h5>
            </div>
            <div>
              <BuyClaim />
            </div>
          </div>
          <div className="fish-img">
            <img src="/assets/fish.png" className='max-w-full w-full h-auto' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
