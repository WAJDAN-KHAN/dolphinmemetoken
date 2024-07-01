import React from 'react';
import { BuyClaim } from './buyClaim';
const social = [
  {
    id: 1,
    img: '/assets/fb.png',
    bg: '#365493',
  },
  {
    id: 2,
    img: '/assets/x.png',
    bg: '#000',
  },
  {
    id: 3,
    img: '/assets/insta.png',
    bg: '#774430',
  },
  {
    id: 4,
    img: '/assets/youtube.png',
    bg: '#CB2027',
  },
  {
    id: 5,
    img: '/assets/tik-tok.png',
    bg: '#010101',
  },
  {
    id: 6,
    img: '/assets/telegram.png',
    bg: '#37AEE2',
  },
];
export const Presale = () => {
  return (
    <div className="pt-[150px]">
      <div className="container mx-auto px-[15px] py-[40px] lg:px-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2  ">
          <div className="content">
            <h4 class="neon text-black text-[34px] font-semibold leading-1">
              Welcome to{' '}
              <u className="text-[#229ed2] " style={{ textDecoration: 'none' }}>
                {' '}
                Meme{' '}
              </u>
              Tokens - The Future of Real World Utility Memes on Solana!
            </h4>
            <div className="">
              <h5 className="text-[#242424] poppins text-[16px] font-semibold mb-[10px]">
                {' '}
                Why just surf when you can ride the wave with Dolphin Meme Tokens, the pinnacle of meme coin evolution
                on Solana!{' '}
              </h5>
              <h5 className="text-[#242424] poppins text-[16px] font-semibold mb-[10px]">
                Connect, trade, and shop with the freedom and fun only a true utility meme coin can offer.{' '}
              </h5>
              <h5 className="text-[#242424] poppins text-[16px] font-semibold mb-[10px]">
                Dolphin isn’t just another token; it’s a community, celebrating every splash in the vast ocean of
                crypto.{' '}
              </h5>
              <h5 className="text-[#242424] poppins text-[16px] font-semibold mb-[10px]">
                Dive into a sea of possibilities with Dolphin Token. Evolve your portfolio on Solana today!{' '}
              </h5>
            </div>
            <div>
              <BuyClaim />
            </div>
          </div>
          <div className="fish-img">
            <img src="/assets/fish.png" className="max-w-full w-full h-auto" alt="" />
            <div className="flex gap-3 items-center justify-center">
              <h1 className="text-black text-[14px] font-semibold poppins">Follow ;</h1>
              <div className="flex gap-3 items-center">
                {social.map((social) => (
                  <a
                    href=""
                    className={`w-[40px] h-[40px]   flex justify-center items-center rounded-[5px]`}
                    style={{ background: social.bg }}
                  >
                    <img src={social.img} className="w-[16px] h-auto" alt="" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col fixed right-0 top-[30%] z-30">
        {social.map((social) => (
          <a
            href=""
            className={`w-[40px] h-[40px]   flex justify-center items-center  `}
            style={{ background: social.bg }}
          >
            <img src={social.img} className="w-[16px] h-auto" alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};
