import React from 'react';

const team = [
  {
    id: 1,
    profession: 'IT Specialist - James',
    img: '/assets/IMG_7935-qoruub7l2bc9xv4qytsxei6zqixp7ud4a423a915ls.webp',
  },
  {
    id: 2,
    profession: 'CPA (Certified Public Accountant) - Ali',
    img: '/assets/IMG_7934-qoruu5kjxb4k07cxvrd5zjm867phxnqq9c56el9in4.webp',
  },
  {
    id: 3,
    profession: 'Digital Marketing Specialist - Daniel',
    img: '/assets/IMG_7933-qorutyzolgvjqxmhy6is03a00ilxfs0lwfks1nj9uo.webp',
  },
  {
    id: 4,
    profession: 'MBA (Master of Business Administration) - Hassan',
    img: '/assets/IMG_7932-qorutrgz2sl961xf639rg56b9fmzq76r7ecw7fuf8g.webp',
  },
  {
    id: 5,
    profession: 'Crypto Advisor - Terry',
    img: '/assets/IMG_7931-qorutjy9k4ayl68ce00qw72mico20mcwid50d85km8.webp',
  },
];

export const OurTeam = () => {
  return (
    <div className="py-[40px] overflow-hidden">
      <div className="container mx-auto max-w-full w-full lg:max-w-[1140px]  px-[20px]">
        <div className="grid grid-cols-12 items-center gap-7">
          <div className="col-span-12 md:col-span-4">
            <div className="liner-continer">
              <h4 className="text-[34px] text-[#242424] font-semibold poppins"> Meet our team</h4>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div>
              <p className="roboto text-[18px]" style={{ color: 'rgb(122, 122, 122)' }}>
                At Dolphin, we are proud to introduce a diverse team of professionals dedicated to driving innovation
                and success in the blockchain and e-commerce spaces. Each team member brings unique expertise and a
                passion for excellence, ensuring that Dolphin remains at the forefront of industry advancements
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5  pt-5">
          {team.map((team) => (
            <div className=" max-w-full md:max-w-[200px]">
              <div className="team-img mb-[15px]">
                <img src={team.img} className="md:max-w-[184px] max-w-full h-auto" alt="" />
              </div>
              <h4 className="member-name text-[#242424] poppins font-semibold text-[18px] mb-[20px]">
                {team.profession}
              </h4>
              <div className="relative flex justify-between">
                <h2 className="text-[#00238A] font-semibold text-[16px] roboto">Read More</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
