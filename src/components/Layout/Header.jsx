import React from 'react'

export const Header = () => {
    const menuItems = [
        { id: "menu-item-84", href: "#", text: "Home" },
        { id: "menu-item-75", href: "#Partnership", text: "Partnership" },
        { id: "menu-item-228", href: "#sales", text: "Sales" },
        { id: "menu-item-229", href: "#about", text: "About Us" },
        { id: "menu-item-230", href: "#our", text: "Team" },
        { id: "menu-item-231", href: "#buy", text: "How To buy" },
        { id: "menu-item-232", href: "#token", text: "Tokenomics" },
        { id: "menu-item-233", href: "#road", text: "Roadmap" },
        { id: "menu-item-234", href: "#faq", text: "FAQ" },
        { id: "menu-item-280", href: "https://dolphinmemetoken.com/wp-content/uploads/2024/06/Dolphin-Meme-Tokens-Whitepaper-.pdf", text: "Whitepaper", target: "_blank" },
        { id: "menu-item-235", href: "#contact", text: "Contact Us" },
        { id: "menu-item-368", href: "https://dolphinmemetoken.com/blog/", text: "Blog" },
    ];

    const social = [
        {
            id:1,
            img:'/assets/fb.png'
        },
        {
            id:2,
            img:'/assets/x.png'
        },
        {
            id:3,
            img:'/assets/insta.png'
        },
        {
            id:4,
            img:'/assets/youtube.png'
        },
        {
            id:5,
            img:'/assets/tik-tok.png'
        },
        {
            id:6,
            img:'/assets/telegram.png'
        },
    ]

    return (
        <div>
            <div className="bg-[#2596be] py-2">
                <div className="container mx-auto px-[15px] lg:px-0">
                    <div className="flex flex-row justify-between items-center">
                        <div className="logo">
                            <img src="/assets/video-3.webp" className='w-[94px] h-[104px]' alt="" />
                        </div>
                        <div className="px-[10px] hidden lg:block">
                            <ul className='list-none p-0 m-0 poppins inline-flex flex-wrap justify-center ' style={{ gap: '1px 20px' }}>
                                {menuItems.map((menu) =>
                                    <li>
                                        <a href="#" className='font-bold text-[16px] capitalize text-[#fff] hover:text-[#ffffffcc]'>
                                            {menu.text}
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="hidden md:flex  flex-wrap justify-center gap-3  ">
                            {social.map((icon)=>
                            
                            <a href="" className='w-[20px] flex items-center justify-center h-[20px]'>
                                <img src={icon.img} className=' ' alt="" />
                            </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
