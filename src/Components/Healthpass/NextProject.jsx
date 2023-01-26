const NextProject = () => {
    return (
        <div className="max-w-6xl flex flex-col gap-14 mx-auto p-4 md:px-20 mb-10 lg:mb-20 h-[10px] -translate-y-[10rem] md:-translate-y-[18.5rem]">
            <h2 className="font-normal leading-4 text-base uppercase">More Projects</h2>
            <div className="flex flex-col md:flex-row gap-20">
                <div className="flex">
                    <div className="flex items-center bg-[#C8D1EE] w-[90px] h-[80px]">
                        <img src="assets/images/1576.png" alt="" />
                    </div>
                    <div className="bg-[#FFFFFF] shadow-lg rounded-l w-full md:w-[370px] px-10 py-6">
                        <span className="text-[#111111] text-[18px]">Health Pass</span>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex mx-auto items-center bg-[#1890FFB2] w-[90px] h-[80px]">
                        <img src="assets/images/search-page.png" className="ml-[0.75rem]" alt="" />
                    </div>
                    <div className="bg-[#FFFFFF] shadow-lg rounded-l w-full md:w-[370px] px-10 py-6">
                        <span className="text-[#111111] text-[18px]">Nautic</span>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col gap-8 md:gap-0">
                <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                    <div className="flex flex-col my-auto gap-4">
                        <h2 className="text-lg text-[#111111] hover:text-blue-700 transition-all duration-300 ease-in-out cursor-pointer">Next Project</h2>
                        <div className="flex gap-8 items-center">
                            <p className="text-5xl font-medium text-[#111111] hover:text-blue-700 transition-all duration-300 ease-in-out cursor-pointer"><a href="/airpeace-case-study">Air Peace</a></p>
                            <img src="assets/images/arrow.png" alt="" className="w-[25px] h-[26px]" />
                        </div>
                    </div>
                    <div className="relative w-fit mx-auto h-[28rem] md:h-[36rem] flex">
                        <img src="assets/images/next_project.png"
                            className="absolute mx-auto flex top-0 h-[28rem] md:h-[36rem] object-cover" alt="" />
                        <div className="rounded-full w-72 h-72  md:w-80 md:h-80 lg:w-96 lg:h-96 flex my-auto">
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default NextProject