const NextProject = () => {
    return (
        <div className="max-w-6xl flex flex-col gap-14 mx-auto p-4 md:px-20 mb-10 lg:mb-36">
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
        </div>
    )
}

export default NextProject