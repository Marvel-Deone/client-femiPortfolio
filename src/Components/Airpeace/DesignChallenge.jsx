const DesignChallenge = () => {
    return (
        <div
            className="max-w-full flex flex-col gap-4 md:gap-10 mx-auto bg-[#273C75] -translate-y-[10rem] md:-translate-y-[17.5rem] h-auto py-10 md:py-16">
            <div className="max-w-6xl mx-auto px-3 py-6 md:py-0 flex flex-col gap-7">
                <h2 className="font-semibold leading-4 text-base text-[#AD1124]">Design Challenge</h2>
                <div className="flex flex-col gap-3">
                    <p className="text-sm md:text-[16px] leading-loose text-white font-[200]">In the past few years, the
                        Aviation sector
                        in Nigeria has
                        witnessed a gradual increase in domestic and international flights and the use of online booking
                        mobile apps by air travelers is also rising.
                    </p>
                    <p className="text-white text-sm md:text-[16px] leading-loose font-[200]">
                        Before booking for flights
                        via
                        mobile
                        applications or websites air
                        travelers often ended up on
                        long queues at the airport to purchase a ticket. <br /></p>
                    <p className="text-white text-sm md:text-[16px] leading-loose font-[200] w-full md:w-[444px] border-b-2 border-blue-800">Here’s our initial “How Might We“ (HMW) Problem statement</p>
                </div>
            </div>
            <div className="max-w-6xl flex mx-auto px-3 py-10">
                <h2 className="text-white text-[15px] md:text-xl text-bold">HMW encourage easy and seamless purchase of air
                    tickets
                    by
                    air
                    travellers and
                    improve users
                    experience navigating through?</h2>
            </div>
        </div>
    )
}

export default DesignChallenge