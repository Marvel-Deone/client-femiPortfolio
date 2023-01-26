const SolutionChallenge = () => {
    return (
        <div className="max-w-6xl mx-auto md:py-20 mb-2">
            <h2 className="text-[#111111] p-3 font-semibold leading-4 text-base mb-2">
                What i did</h2>
            <div className="flex flex-col gap-8 md:gap-0">
                {/* select location */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-16">
                    <div className="relative w-fit mx-auto items-center h-[28rem] md:h-[36rem] flex">
                        <div className="rounded-full bg-[#DCDDE1] w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex my-auto">
                        </div>
                        <img src="assets/images/health-pass1.png"
                            className="absolute top-0 h-[28rem] md:h-[36rem] left-5 md:left-6 object-cover" alt="" />
                    </div>
                    <div className="flex flex-col my-auto gap-3 px-3 py-4 md:gap-12">
                        <h2 className="font-bold text-lg md:text-2xl text-[#111111]">Track all your medical records by
                            adding passes
                        </h2>
                        <p className="text-base text-[#111111] font-[300]">Users can add pass by either scanning a QR code
                            on the website or by adding it from photo gallery. this pass will be added to his/her wallet
                            for future reference.</p>
                    </div>
                </div>
                {/* Validated active Passes */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                    <div className="flex flex-col my-auto px-3 py-4 gap-4 md:gap-12">
                        <h2 className="font-bold text-lg md:text-2xl text-[#111111]">Validated active Passes
                        </h2>
                        <p className="text-base text-[#111111] font-[300]">a list of active passes are added to the app
                            wallet. this passes show the several records of health statuses of a patient. this enables
                            health facilities to track.</p>
                    </div>
                    <div className="relative w-fit mx-auto items-center h-[28rem] md:h-[36rem] flex">
                        <div className="rounded-full bg-[#DCDDE1] w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex my-auto">
                        </div>
                        <img src="assets/images/1576.png"
                            className="absolute top-0 h-[28rem] md:h-[36rem] left-2 md:left-4 object-cover" alt="" />
                    </div>
                </div>

                {/* Detailed information about a medical */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-16">
                    <div className="hidden md:flex relative w-fit mx-auto items-center h-[28rem] md:h-[36rem] flex">
                        <div className="rounded-full bg-[#DCDDE1] w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex my-auto">
                        </div>
                        <img src="assets/images/health-pass3.png"
                            className="absolute mx-auto top-0 h-[28rem] md:h-[36rem] left-6 md:left-2 lg:left-8 object-cover" alt="" />
                    </div>
                    <div className="flex flex-col my-auto px-3 py-4 gap-3 md:gap-12">
                        <h2 className="font-bold text-lg md:text-2xl text-[#111111]">Detailed information about a medical
                            record.
                        </h2>
                        <p className="text-base text-[#111111] font-[300]">Here one can get full details regarding one’s
                            medical record such as last screening test results , health status in just a single scan.
                            this feature is mosly used by health and public facilities to monitor the outbreak of
                            diseases in the society.</p>
                    </div>
                    <div className="md:hidden relative w-fit mx-auto items-center h-[28rem] md:h-[36rem] flex">
                        <div className="rounded-full bg-[#DCDDE1] w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex my-auto">
                        </div>
                        <img src="assets/images/health-pass3.png"
                            className="absolute mx-auto top-0 h-[28rem] md:h-[36rem] left-6 md:left-2 lg:left-8 object-cover" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionChallenge