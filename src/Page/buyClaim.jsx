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
      <div className="py-4 px-6 mt-4" style={{ border: '3px solid #229ed2' }}>
        <h2 class="py-2 mx-auto text-xl font-extrabold tracking-widest text-center">Dolphin Presale</h2>
        <div class="relative flex items-center w-full border border-[#4b5563] h-8 mb-4  ">
          <div
            id="progress-bar"
            class="scale-x-0 w-full absolute transition-all h-6 bg-[#229ed2] text-xs font-bold flex justify-center items-center origin-left"
            style={{ transform: 'scale(0.79, 1)' }}
          ></div>
          <div class="relative z-20 w-full text-xs font-bold text-center text-black uppercase sm:tracking-widest">
            <span>BUY BEFORE NEXT STAGE PRICE INCREASE</span>
          </div>
        </div>
        <div className=" text-center">
          <h1 className="font-bold text-[1.125rem] text-black">
            $USD RAISED <span> : $1,570,693.24</span>
          </h1>
        </div>
        <div className="flex items-center pt-4 gap-x-2">
          <hr className="border-1 border-[#4b5563] flex-1" />
          <span className="font-bold tracking-widest">1 $DICE = $0.0825 </span>
          <hr className="border-1 border-[#4b5563] flex-1" />
        </div>
        <div className="relative flex flex-col items-center justify-start w-full h-full gap-2 py-0 pt-2">
          <div className="w-full py-3 text-center cursor-pointer">
            <h4 className="mb-2 text-base">Only send SOL from hot wallets (eg Phantom) to this address:</h4>
            <div className="w-full p-2 font-bold text-center truncate border border-[#4b5563]">
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
                className="wallet-adapter-button wallet-adapter-button-trigger hover:bg-[#229ed2] bg-transparent text-black hover:text-white w-full p-[1rem]"
                tabindex="0"
                type="button"
                style={{ border: '1px solid #4b5563' }}
              >
                Connect wallet
              </button>
            </div>
          </div>
          <div className="col-span-12 mt-4">
            <div className="wallet-adapter-dropdown">
              <button
                className="wallet-adapter-button wallet-adapter-button-trigger  bg-[#229ed2]    text-white w-full p-[1rem]"
                tabindex="0"
                type="button"
                style={{ border: '1px solid #229ed2' }}
              >
                Claim Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
