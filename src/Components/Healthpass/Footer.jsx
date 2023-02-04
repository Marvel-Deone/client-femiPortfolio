const Footer = () => {
    return (
        <div
            className="max-w-7xl mx-auto flex flex-col gap-5 md:gap-8 mb-10 lg:mb-12 md:-translate-y-[13.5rem]">
            <hr className="w-full md:max-w-2xl border-[#7F7F7F] flex mx-auto" />
            <h2 className="text-center font-[500] text-2xl text-[#000000]">Let’s Connect !</h2>
            <div className="flex gap-10 mx-auto items-center">
                <a href="https://www.linkedin.com/in/olorunfemi-oyediji-ogungbile-b91a0714b" target="_blank" rel="noreferrer"><img src="assets/images/LinkedIn.png" className="w-[23.95px] h-[23.95px]" alt="" /></a>
                <a href="https://twitter.com/MrOyediji" target="_blank" rel="noreferrer">
                    <img src="assets/images/twitter.png" className="w-[24px] h-[18px]" alt="" />
                </a>
                <a href="https://www.behance.net/olorunfemiogungbile" target="_blank" rel="noreferrer">
                    <img src="assets/images/be.png" className="w-[24px] h-[24px]" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Footer