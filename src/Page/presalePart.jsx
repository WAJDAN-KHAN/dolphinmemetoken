import React from 'react';
import { BuyClaim } from './buyClaim';
const social = [
  {
    id: 1,
    img: '/assets/fb.png',
    bg: '#365493',
    name: 'Facebook',
    link: 'https://www.facebook.com/dolphinesolana',
  },
  {
    id: 2,
    img: '/assets/x.png',
    bg: '#000',
    name: 'X',
    link: 'https://x.com/DolphinSolana24',
  },
  {
    id: 3,
    img: '/assets/insta.png',
    bg: '#774430',
    name: 'Instagram',
    link: 'https://www.instagram.com/dolphinsolana/',
  },
  {
    id: 4,
    img: '/assets/youtube.png',
    bg: '#CB2027',
    name: 'Youtube',
    link: 'https://www.youtube.com/@DolphinSolana/featured',
  },
  {
    id: 5,
    img: '/assets/tik-tok.png',
    bg: '#010101',
    name: 'Tiktok',
    link: 'https://www.tiktok.com/@dolphinsolana',
  },
  {
    id: 6,
    img: '/assets/telegram.png',
    bg: '#37AEE2',
    name: 'Telegram',
    link: 'https://t.me/DolphinSolana1',
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
                    href={social.link}
                    target="_blank"
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
      <div className="hidden lg:flex flex-col fixed right-0 top-[30%] z-30">
        {social.map((social) => (
          <a
            href={social.link}
            target="_blank"
            className={`w-[40px] h-[40px]   flex justify-center items-center    gap-2`}
            style={{ background: social.bg }}
          >
            <img src={social.img} className="w-[16px] h-auto" alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};
