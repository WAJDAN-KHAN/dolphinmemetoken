import React from 'react';

export const BuyClaim = () => {
  return (
    <div className="poppins">
      <div className="flex justify-center gap-3">
        <span className="countdown-days bg-[#2596be] p-2 w-[75px] h-[75px] rounded-md flex flex-col justify-center items-center text-white">
          <h1 className="poppins font-bold text-[20px]">6</h1>
          <p className="poppins font-normal text-[15px]">Days</p>
        </span>
        <span className="countdown-hour bg-[#2596be] p-2 w-[75px] h-[75px] rounded-md flex flex-col justify-center items-center text-white">
          <h1 className="poppins font-bold text-[20px]">16</h1>
          <p className="poppins font-normal text-[15px]">Hr</p>
        </span>
        <span className="countdown-min bg-[#2596be] p-2 w-[75px] h-[75px] rounded-md flex flex-col justify-center items-center text-white">
          <h1 className="poppins font-bold text-[20px]">26</h1>
          <p className="poppins font-normal text-[15px]">Min</p>
        </span>
        <span className="countdown-sec bg-[#2596be] p-2 w-[75px] h-[75px] rounded-md flex flex-col justify-center items-center text-white">
          <h1 className="poppins font-bold text-[20px]">6</h1>
          <p className="poppins font-normal text-[15px]">Sec</p>
        </span>
      </div>
      <div className="py-4 text-center">
        <h1 className="font-bold text-[1.125rem] text-black">
          $USD RAISED <span> : $1,570,693.24</span>
        </h1>
      </div>
      <div className="flex items-center pt-4 gap-x-2">
        <hr className="border border-[#424242] flex-1" />
        <span className="font-bold tracking-widest">1 $DICE = $0.0825 </span>
        <hr className="border border-[#424242] flex-1" />
      </div>
      <div className="relative flex flex-col items-center justify-start w-full h-full gap-2 py-0 pt-2">
        <div className="w-full py-3 text-center cursor-pointer">
          <h4 className="mb-2 text-base">Only send SOL from hot wallets (eg Phantom) to this address:</h4>
          <div className="w-full p-2 font-bold text-center truncate border-2 border-primary">
            BQtF7wp29e9KDu7MHqvcdMjtUpZXABtqkRsbgnDpygi1
          </div>
        </div>
        <div className="w-full py-1 my-0 text-center border-primary border-bottom">OR</div>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-6">
          <label for="pay-input" className="block  poppins pb-2 text-xs font-bold tracking-wider">
            Buy with SOL
          </label>
          <input
            type="text"
            id="pay-input"
            className="w-full p-4 text-sm text-black bg-transparent outline-none ring-1 ring-gray-600"
            placeholder="0"
          ></input>
        </div>
        <div className="col-span-6">
          <label for="recieve-input" className="block pb-2 text-xs font-bold tracking-wider">
            Receive $Dice
          </label>
          <input
            type="text"
            id="recieve-input"
            className="w-full p-4 text-sm text-black bg-transparent outline-none ring-1 ring-gray-600"
            disabled
            value={'0'}
          />
        </div>
        <div className="col-span-12 mt-4">
          <div className="py-1 mb-0 border-primary">
            <div className="flex items-center justify-between py-0">
              <span className="text-xs font-bold tracking-widest uppercase text-lightgray">
                Tokens bought on solana:
              </span>
              <span className="font-semibold">0</span>
            </div>
          </div>
        </div>
        <div className="col-span-12 mt-4">
          <div className="wallet-adapter-dropdown">
            <button
              className="wallet-adapter-button wallet-adapter-button-trigger hover:bg-[#0ac18e] bg-transparent text-black hover:text-white w-full p-[1rem]"
              tabindex="0"
              type="button"
              style={{ border: '1px solid #0ac18e' }}
            >
              Connect wallet
            </button>
          </div>
        </div>
        <div className="col-span-12 mt-4">
          <div className="wallet-adapter-dropdown">
            <button
              className="wallet-adapter-button wallet-adapter-button-trigger  bg-[#0ac18e]    text-white w-full p-[1rem]"
              tabindex="0"
              type="button"
              style={{ border: '1px solid #0ac18e' }}
            >
              Claim Now
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-12">
        <div className="col-span-12 sm:col-span-6">
          <a
            href="#how-to-buy"
            className="flex items-center justify-start sm:mb-0 mb-1 gap-x-2 text-xs font-medium uppercase text-[#979797] tracking-widest"
          >
            How to buy
            <img
              alt="arrow right"
              loading="lazy"
              width="11"
              height="8"
              decoding="async"
              data-nimg="1"
              style={{ color: 'transparent' }}
              src="/assets/arrow-right.65c2c77d.svg"
            />
          </a>
        </div>
        <div className="sm:col-span-6 col-span-12 sm:text-end text-xs font-bold text-[#979797] tracking-widest">
          <button
            className="flex items-center w-full uppercase sm:justify-end gap-x-2 disabled:cursor-not-allowed"
            disabled
          >
            Refer and Earn
            <img
              alt="arrow right"
              loading="lazy"
              width="11"
              height="8"
              decoding="async"
              data-nimg="1"
              style={{ color: 'transparent' }}
              src="/assets/arrow-right.65c2c77d.svg"
            />
          </button>
        </div>
      </div>
      <div class="flex sm:justify-end sm:text-right">
        <a
          download=""
          href="/assets/referandearn.pdf"
          class="text-right inline-block flex gap-2 py-[1px] mt-2 text-xs uppercase my-0 font-bold text-[#979797] tracking-widest"
        >
          Instructions for referring
          <img
            alt="arrow right"
            loading="lazy"
            width="11"
            height="8"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            src="/assets/arrow-right.65c2c77d.svg"
          />
        </a>
      </div>
    </div>
  );
};
