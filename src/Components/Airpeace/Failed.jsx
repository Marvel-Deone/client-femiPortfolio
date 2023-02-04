const Failed = () => {
    return (
        <div className="-translate-y-[12rem] md:-translate-y-[10rem]">
            <div
                className="max-w-6xl mx-auto flex flex-col gap-3 md:gap-0 px-1">
                <div className="flex flex-col gap-4 px-3">
                    <h2 className="text-[#AD1124] font-semibold leading-4 text-sm md:text-base mb-2 md:mb-0">We
                        failed to solve air travellers problem of booking a flight</h2>
                    <p className="text-sm md:text-base text-[#111111] font-[400]">From the feedback we got from frequent air
                        travellers. we learnt
                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 text-[#000000] py-6 md:py-8 lg:py-9" id="validating_list">
                <p className="md:mt-0 text-[#000000]">1.) We had taken too much inspiration for already existing airline booking
                    platforms and were
                    forgetting about the usability aspect.</p>
                <p className="mt-1 md:mt-0 text-[#000000]">2.) We need a real wow factor.
                </p>
                <p className="mt-1 md:mt-0 text-[#000000]">3.) I presented the mobile app design and gave them a set of pre-defined
                    tasks including to book
                    a return flight from Lagos to Cape any destination of thier choice for 2 adults for 7 days. </p>
            </div>
        </div>
    )
}

export default Failed