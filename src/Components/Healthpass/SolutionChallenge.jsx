const SolutionChallenge = () => {
    return (
        <div className="max-w-6xl mx-auto md:py-20 -translate-y-[10rem] md:-translate-y-[15.5rem]">
            <h2 className="text-[#111111] p-3 font-semibold leading-4 text-base mb-2">
                Solution Preview</h2>
            <div className="flex flex-col gap-16 md:gap-0">
                {/* select location */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-56">
                    <div className="relative w-fit items-center h-[28rem] md:h-[36rem] flex">
                        <div className="rounded-full bg-[#E9F1FC] w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex my-auto">
                        </div>
                        <img src="assets/images/health-pass1.png"
                            className="absolute top-0 h-[28rem] md:h-[36rem] left-5 md:left-6 object-cover" alt="" />
                    </div>
                    <div className="flex flex-col my-auto gap-3 px-3 py-4 md:gap-12">
                        <h2 className="font-bold text-lg md:text-2xl text-[#111111] w-full md:w-[28rem]">Track all your medical records by
                            adding passes
                        </h2>
                        <p className="text-base text-[#111111] font-[300] w-full md:w-[28rem] tracking-wide">Users can add pass by either scanning a QR code
                            on the <br /> website or by adding it from photo gallery. This pass will be added to his/her wallet
                            for future reference.</p>
                    </div>
                </div>
                {/* Validated active Passes */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                    <div className="flex flex-col my-auto px-3 py-4 gap-4 md:gap-12">
                        <h2 className="font-bold text-lg md:text-2xl text-[#111111]">Validated active Passes
                        </h2>
                        <p className="text-base text-[#111111] font-[300] w-full md:w-[29rem]">a list of active passes are added to the app
                            wallet. this passes show the several records of health statuses of a patient. this enables
                            health facilities to track.</p>
                    </div>
                    <div className="relative w-fit mx-auto items-center h-[28rem] md:h-[36rem] flex">
                        <div className="rounded-full bg-[#E9F1FC] w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex my-auto">
                        </div>
                        <img src="assets/images/1576.png"
                            className="absolute top-0 h-[28rem] md:h-[36rem] left-2 md:left-4 object-cover" alt="" />
                    </div>
                </div>

                {/* Detailed information about a medical */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-56">
                    <div className="hidden md:flex relative w-fit items-center h-[28rem] md:h-[36rem] flex">
                        <div className="rounded-full bg-[#E9F1FC] w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex my-auto">
                        </div>
                        <img src="assets/images/dwd.png"
                            className="absolute mx-auto top-0 h-[28rem] md:h-[36rem] left-2 object-cover" alt="" />
                    </div>
                    <div className="flex flex-col my-auto px-3 py-4 gap-3 md:gap-12">
                        <h2 className="font-bold text-lg md:text-2xl text-[#111111] w-full md:w-[29rem]">Detailed information about a medical
                            record.
                        </h2>
                        <p className="text-base text-[#111111] font-[300] w-full md:w-[29rem]">Here one can get full details regarding one’s
                            medical record such as last screening test results , health status in just a single scan.
                            this feature is mosly used by health and public facilities to monitor the outbreak of
                            diseases in the society.</p>
                    </div>
                    <div className="lg:hidden relative w-fit mx-auto items-center h-[28rem] md:h-[36rem] flex">
                        <div className="rounded-full bg-[#E9F1FC] w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex my-auto">
                        </div>
                        <img src="assets/images/dwd.png"
                            className="absolute mx-auto top-0 h-[28rem] md:h-[36rem] left-6 md:left-2 lg:left-8 object-cover" alt="" />
                    </div>
                </div>
            </div>
            <button button className="flex mt-28 focus:outline-0 transition-all ease-in-out duration-500 mx-auto cursor-pointer bg-[#2B539F] transition-all ease-in-out duration-300 hover:bg-[#1b3565] text-white text-[14px] px-[15px] py-[14px] text-center rounded-md hover:bg-blue-900" > <a className="text-white" href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcQsrCQOIi3PODesP1jeU5B%2Fhealth-pass-new%3Fpage-id%3D0%253A1%26node-id%3D1%253A433%26viewport%3D468%252C211%252C0.13%26scaling%3Dcontain%26starting-point-node-id%3D1%253A433" target="_blank" rel="noreferrer">Link to final Prototype</a></button >
        </div>
    )
}

export default SolutionChallenge