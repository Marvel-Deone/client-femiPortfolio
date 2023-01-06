
const Hero = () => {
    return (
        // Hero Area Start
        <div id="home" className="hero-area" style={{ backgroundColor: 'white', paddingLeft: '40px', paddingRight: '40px' }}>
            <div className="col-lg-6 d-flex align-self-center">
                <div className="left-content">
                    <div className="content">
                        <p className="subtitle" style={{ fontWeight: '500px' }}>Hi, I'm Olorunfemi</p>

                        <p id="hero-title">I design easy-to-use <br /> mobile and web solutions through empathy and communications.</p>
                        <p id="hero-title2">I design easy-to-use <br /> mobile and web solutions through <br /> empathy and communication.</p>
                        <div className="links">

                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/images/work/1.jpg" alt="hero-section" width={600} />
        </div>
        // Hero Area End
    )
}

export default Hero